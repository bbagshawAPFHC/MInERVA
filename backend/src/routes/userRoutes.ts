// src/routes/userRoutes.ts
import { Router } from 'express';
import { getUserProfilePicture } from '../controllers/userController';
import { azureAdMiddleware } from '../middleware/azureAdMiddleware';

const router = Router();

router.get('/profile-picture', azureAdMiddleware, getUserProfilePicture);

export default router;
