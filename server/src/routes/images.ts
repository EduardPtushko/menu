import express, { Request, Response } from 'express';
import fs from 'fs';
import stream from 'stream';
import path from 'path';

const router = express.Router();

router.get('/api/images/:imageId', (req: Request, res: Response) => {
    const { imageId } = req.params;

    const pathToFile = path.resolve(process.cwd(), 'data/images', imageId);

    const readableStream = fs.createReadStream(pathToFile);
    const ps = new stream.PassThrough();

    stream.pipeline(readableStream, ps, (err) => {
        if (err) {
            return res.sendStatus(400);
        }
    });
    ps.pipe(res);
});

export { router as imagesRouter };
