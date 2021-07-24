import express from 'express';
import cors from 'cors';
import * as admin from 'firebase-admin';

admin.initializeApp();

/** [START] routes */


/** [END] routes */
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());







/**
 * Catches all errors coming from all the routes
 */
app.use(function (err: any, req: any, res: any, next: any) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (err.statusCode >= 400 && err.statusCode < 500) {
        res.status(204).end();
        return;
    }

    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`http://localhost:${PORT}`);