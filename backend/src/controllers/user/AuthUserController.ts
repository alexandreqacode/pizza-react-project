import { Request, Response } from "express"; 'express';
import {AuthUserService} from '../../services/user/AuthUserService';

class AuthUserController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const authUserServoce = new AuthUserService;

        const auth = await authUserServoce.execute({
            email,
            password
        })

        return res.json(auth);

    }
}

export {AuthUserController};