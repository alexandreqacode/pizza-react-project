//este arquivo é renderizado uma unica vez e permanece fixo

import { Html, Head, Main, NextScript} from 'next/document'

export default function Document(){
    return(
        <Html>
            <Head>

            </Head>
            <body>
                <Main/>
                <NextScript>
                </NextScript>
            </body>
        </Html>
    )
}