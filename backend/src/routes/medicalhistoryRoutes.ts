import express from 'express';
  import { getAllMedicalhistory, getMedicalhistoryById, createMedicalhistory, updateMedicalhistory, deleteMedicalhistory } from '../controllers/medicalhistoryController';
  
  const router = express.Router();
  
  router.get('/medicalhistory', getAllMedicalhistory);
  router.get('/medicalhistory/:id', getMedicalhistoryById);
  router.post('/medicalhistory', createMedicalhistory);
  router.put('/medicalhistory/:id', updateMedicalhistory);
  router.delete('/medicalhistory/:id', deleteMedicalhistory);
  
  export default router;