import express from 'express';
  import { getAllMedicalrecord, getMedicalrecordById, createMedicalrecord, updateMedicalrecord, deleteMedicalrecord } from '../controllers/medicalrecordController';
  
  const router = express.Router();
  
  router.get('/medicalrecord', getAllMedicalrecord);
  router.get('/medicalrecord/:id', getMedicalrecordById);
  router.post('/medicalrecord', createMedicalrecord);
  router.put('/medicalrecord/:id', updateMedicalrecord);
  router.delete('/medicalrecord/:id', deleteMedicalrecord);
  
  export default router;