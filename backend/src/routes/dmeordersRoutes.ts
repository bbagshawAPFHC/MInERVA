import express from 'express';
  import { getAllDmeorders, getDmeordersById, createDmeorders, updateDmeorders, deleteDmeorders } from '../controllers/dmeordersController';
  
  const router = express.Router();
  
  router.get('/dmeorders', getAllDmeorders);
  router.get('/dmeorders/:id', getDmeordersById);
  router.post('/dmeorders', createDmeorders);
  router.put('/dmeorders/:id', updateDmeorders);
  router.delete('/dmeorders/:id', deleteDmeorders);
  
  export default router;