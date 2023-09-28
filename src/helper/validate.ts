import { NextFunction } from "express";
import { AnyZodObject } from "zod";
import { Request, Response } from "express";

const validate = (schema: AnyZodObject) => 
    async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync({
                body: req.body,
                params: req.params,
                query: req.query
            });

            return next();
        } catch( err: any ){
            const error_message = JSON.parse(err.message);
            return res.status(400).json({
                status: "Bad Request!",
                message: error_message[0].message
            });
        }
    }

    export default validate;