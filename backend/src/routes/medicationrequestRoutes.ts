import express from 'express';
  import { getAllMedicationrequest, getMedicationrequestById, createMedicationrequest, updateMedicationrequest, deleteMedicationrequest } from '../controllers/medicationrequestController';
  
  const router = express.Router();
  
  router.get('/medicationrequest', getAllMedicationrequest);
  router.get('/medicationrequest/:id', getMedicationrequestById);
  router.post('/medicationrequest', createMedicationrequest);
  router.put('/medicationrequest/:id', updateMedicationrequest);
  router.delete('/medicationrequest/:id', deleteMedicationrequest);
  
  export default router;