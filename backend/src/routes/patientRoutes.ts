// backend/src/routes/patientRoutes.ts
import { Router } from 'express';
import { azureAdMiddleware, checkRole } from '../middleware/azureAdMiddleware';
import { getPatients, createPatient, updatePatient, deletePatient } from '../controllers/patientController';

const router = Router();

router.use(azureAdMiddleware);

router.get('/', checkRole(['User', 'Admin']), getPatients);
router.post('/', checkRole(['Admin']), createPatient);
router.put('/:id', checkRole(['Admin']), updatePatient);
router.delete('/:id', checkRole(['Admin']), deletePatient);

export default router;
