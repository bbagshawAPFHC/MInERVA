import express from 'express';
  import { getAllCancercases, getCancercasesById, createCancercases, updateCancercases, deleteCancercases } from '../controllers/cancercasesController';
  
  const router = express.Router();
  
  router.get('/cancercases', getAllCancercases);
  router.get('/cancercases/:id', getCancercasesById);
  router.post('/cancercases', createCancercases);
  router.put('/cancercases/:id', updateCancercases);
  router.delete('/cancercases/:id', deleteCancercases);
  
  export default router;