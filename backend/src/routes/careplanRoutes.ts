import express from 'express';
  import { getAllCareplan, getCareplanById, createCareplan, updateCareplan, deleteCareplan } from '../controllers/careplanController';
  
  const router = express.Router();
  
  router.get('/careplan', getAllCareplan);
  router.get('/careplan/:id', getCareplanById);
  router.post('/careplan', createCareplan);
  router.put('/careplan/:id', updateCareplan);
  router.delete('/careplan/:id', deleteCareplan);
  
  export default router;