import express from 'express';
  import { getAllPrescription, getPrescriptionById, createPrescription, updatePrescription, deletePrescription } from '../controllers/prescriptionController';
  
  const router = express.Router();
  
  router.get('/prescription', getAllPrescription);
  router.get('/prescription/:id', getPrescriptionById);
  router.post('/prescription', createPrescription);
  router.put('/prescription/:id', updatePrescription);
  router.delete('/prescription/:id', deletePrescription);
  
  export default router;