import express from 'express';
  import { getAllEncounterdocument, getEncounterdocumentById, createEncounterdocument, updateEncounterdocument, deleteEncounterdocument } from '../controllers/encounterdocumentController';
  
  const router = express.Router();
  
  router.get('/encounterdocument', getAllEncounterdocument);
  router.get('/encounterdocument/:id', getEncounterdocumentById);
  router.post('/encounterdocument', createEncounterdocument);
  router.put('/encounterdocument/:id', updateEncounterdocument);
  router.delete('/encounterdocument/:id', deleteEncounterdocument);
  
  export default router;