import { Router } from 'express';
import { getPatients, getPatient, searchPatients, getPatientRecords } from '../controllers/patientController';
import { azureAdMiddleware } from '../middleware/azureAdMiddleware';

const router = Router();

router.get('/', azureAdMiddleware, getPatients);
router.get('/:id', azureAdMiddleware, getPatient);
router.get('/search', azureAdMiddleware, searchPatients);
router.get('/records/:athenapatientid', azureAdMiddleware, getPatientRecords);

export default router;
