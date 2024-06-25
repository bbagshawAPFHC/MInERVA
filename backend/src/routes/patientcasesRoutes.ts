import express from 'express';
  import { getAllPatientcases, getPatientcasesById, createPatientcases, updatePatientcases, deletePatientcases } from '../controllers/patientcasesController';
  
  const router = express.Router();
  
  router.get('/patientcases', getAllPatientcases);
  router.get('/patientcases/:id', getPatientcasesById);
  router.post('/patientcases', createPatientcases);
  router.put('/patientcases/:id', updatePatientcases);
  router.delete('/patientcases/:id', deletePatientcases);
  
  export default router;