import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors'

import express, { Request, Response, NextFunction } from 'express';

import BaseRouter from './routes';

import './utils/response/customSuccess';
import ApiError from './utils/response/customError/CustomError';

// Init express
const app = express();



/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors())

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    // app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// Add APIs
app.use('/', BaseRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.HttpStatusCode).json(err.JSON);
  }

  return res.status(500).json({
    error: err.message,
  });
});



// /************************************************************************************
//  *                              Serve front-end content
//  ***********************************************************************************/

// const viewsDir = path.join(__dirname, 'views');
// app.set('views', viewsDir);
// const staticDir = path.join(__dirname, 'public');
// app.use(express.static(staticDir));
// app.get('*', (req: Request, res: Response) => {
//     res.sendFile('index.html', {root: viewsDir});
// });

// Export express instance
export default app;
