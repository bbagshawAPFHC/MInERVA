import express from 'express';
  import { getAllPatient, getPatientById, createPatient, updatePatient, deletePatient } from '../controllers/patientController';
  
  const router = express.Router();
  
  router.get('/patient', getAllPatient);
  router.get('/patient/:id', getPatientById);
  router.post('/patient', createPatient);
  router.put('/patient/:id', updatePatient);
  router.delete('/patient/:id', deletePatient);
  
  export default router;