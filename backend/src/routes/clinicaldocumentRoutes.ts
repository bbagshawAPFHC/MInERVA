import express from 'express';
  import { getAllClinicaldocument, getClinicaldocumentById, createClinicaldocument, updateClinicaldocument, deleteClinicaldocument } from '../controllers/clinicaldocumentController';
  
  const router = express.Router();
  
  router.get('/clinicaldocument', getAllClinicaldocument);
  router.get('/clinicaldocument/:id', getClinicaldocumentById);
  router.post('/clinicaldocument', createClinicaldocument);
  router.put('/clinicaldocument/:id', updateClinicaldocument);
  router.delete('/clinicaldocument/:id', deleteClinicaldocument);
  
  export default router;