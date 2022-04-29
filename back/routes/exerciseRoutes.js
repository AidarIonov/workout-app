import express from 'express';
import { addNewExercise } from '../controllers/exercise/profileController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/').post(protect, addNewExercise);


export default router

