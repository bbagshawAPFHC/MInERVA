import { Router } from 'express';
import { searchPatients } from '../controllers/patientController';

const router = Router();

router.get('/search', searchPatients);

export default router;
