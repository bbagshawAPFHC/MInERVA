import express from 'express';
  import { getAllSurgeryactionnotes, getSurgeryactionnotesById, createSurgeryactionnotes, updateSurgeryactionnotes, deleteSurgeryactionnotes } from '../controllers/surgeryactionnotesController';
  
  const router = express.Router();
  
  router.get('/surgeryactionnotes', getAllSurgeryactionnotes);
  router.get('/surgeryactionnotes/:id', getSurgeryactionnotesById);
  router.post('/surgeryactionnotes', createSurgeryactionnotes);
  router.put('/surgeryactionnotes/:id', updateSurgeryactionnotes);
  router.delete('/surgeryactionnotes/:id', deleteSurgeryactionnotes);
  
  export default router;