import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
/* Config */
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
/* Routes */
import userRoutes from './routes/userRoutes.js';
import exerciseRoutes from './routes/exerciseRoutes.js'
import workoutRoutes from './routes/workoutRoutes.js';


const app = express();
app.use(cors());

dotenv.config();

connectDB()

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads/')));

app.use('/api/users', userRoutes); 
app.use('/api/exercises', exerciseRoutes); 
app.use('/api/workouts', workoutRoutes); 

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)