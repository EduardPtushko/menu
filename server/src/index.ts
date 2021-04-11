import mongoose from 'mongoose';
import { app } from './app';

async function start() {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGDB_URI must be provided');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
    }

    app.listen(app.get('port'), () => {
        console.log(
            '  App is running at http://localhost:%d in %s mode',
            app.get('port'),
            app.get('env')
        );
        console.log('  Press CTRL-C to stop\n');
    });
}

start();
