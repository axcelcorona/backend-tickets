import 'dotenv/config';
import Express from 'express';
import AppRouter from './src/Routes';

const app = Express();

const port = process.env.PORT || 3000;

/**
 * Middleware
 */

app.use(AppRouter);

app.listen(port, () => {
	console.log(`server on port ${port}`);
});
