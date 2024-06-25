import express from 'express';
  import { getAllCareplanevents, getCareplaneventsById, createCareplanevents, updateCareplanevents, deleteCareplanevents } from '../controllers/careplaneventsController';
  
  const router = express.Router();
  
  router.get('/careplanevents', getAllCareplanevents);
  router.get('/careplanevents/:id', getCareplaneventsById);
  router.post('/careplanevents', createCareplanevents);
  router.put('/careplanevents/:id', updateCareplanevents);
  router.delete('/careplanevents/:id', deleteCareplanevents);
  
  export default router;