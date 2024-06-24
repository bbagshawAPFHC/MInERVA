import { Router } from 'express';
import { getPatients, getPatient } from '../controllers/patientController';
import { azureAdMiddleware } from '../middleware/azureAdMiddleware';

const router = Router();

router.get('/', azureAdMiddleware, getPatients);
router.get('/:id', azureAdMiddleware, getPatient);

export default router;
