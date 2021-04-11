import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const handleError = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(400).send({
        errors: [
            {
                message: 'Something went wrong',
            },
        ],
    });
};
