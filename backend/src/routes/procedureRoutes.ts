import express from 'express';
  import { getAllProcedure, getProcedureById, createProcedure, updateProcedure, deleteProcedure } from '../controllers/procedureController';
  
  const router = express.Router();
  
  router.get('/procedure', getAllProcedure);
  router.get('/procedure/:id', getProcedureById);
  router.post('/procedure', createProcedure);
  router.put('/procedure/:id', updateProcedure);
  router.delete('/procedure/:id', deleteProcedure);
  
  export default router;