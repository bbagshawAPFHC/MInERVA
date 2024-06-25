import express from 'express';
  import { getAllPatientinsurance, getPatientinsuranceById, createPatientinsurance, updatePatientinsurance, deletePatientinsurance } from '../controllers/patientinsuranceController';
  
  const router = express.Router();
  
  router.get('/patientinsurance', getAllPatientinsurance);
  router.get('/patientinsurance/:id', getPatientinsuranceById);
  router.post('/patientinsurance', createPatientinsurance);
  router.put('/patientinsurance/:id', updatePatientinsurance);
  router.delete('/patientinsurance/:id', deletePatientinsurance);
  
  export default router;