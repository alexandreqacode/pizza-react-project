import { GetServerSideProps, GetStaticPathsContext, GetServerSidePropsResult } from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import {AuthTokenError} from '../services/errors/AuthTokenError'

//função para paginas que só usuários logadaos podem ter acesso

export function canSSRAuth<P>(fn: GetServerSideProps){
    return async(ctx: GetStaticPathsContext): Promise<GetServerSidePropsResult<P>> =>{
        const cookies = parseCookies(ctx);

        const token = cookies['@nextauth.token'];

        if(!token){
            return{
                redirect:{
                    destination: '/',
                    permanent: false
                }
            }
        }

        try{
            return await fn(ctx);
        }catch(err){
            if(err instanceof AuthTokenError){
                destroyCookie(ctx, '@nextauth.token');

                return{
                    redirect:{
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }
    }
}