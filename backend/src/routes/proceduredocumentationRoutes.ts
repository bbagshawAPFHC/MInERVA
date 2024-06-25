import express from 'express';
  import { getAllProceduredocumentation, getProceduredocumentationById, createProceduredocumentation, updateProceduredocumentation, deleteProceduredocumentation } from '../controllers/proceduredocumentationController';
  
  const router = express.Router();
  
  router.get('/proceduredocumentation', getAllProceduredocumentation);
  router.get('/proceduredocumentation/:id', getProceduredocumentationById);
  router.post('/proceduredocumentation', createProceduredocumentation);
  router.put('/proceduredocumentation/:id', updateProceduredocumentation);
  router.delete('/proceduredocumentation/:id', deleteProceduredocumentation);
  
  export default router;