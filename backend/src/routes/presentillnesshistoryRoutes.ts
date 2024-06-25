import express from 'express';
  import { getAllPresentillnesshistory, getPresentillnesshistoryById, createPresentillnesshistory, updatePresentillnesshistory, deletePresentillnesshistory } from '../controllers/presentillnesshistoryController';
  
  const router = express.Router();
  
  router.get('/presentillnesshistory', getAllPresentillnesshistory);
  router.get('/presentillnesshistory/:id', getPresentillnesshistoryById);
  router.post('/presentillnesshistory', createPresentillnesshistory);
  router.put('/presentillnesshistory/:id', updatePresentillnesshistory);
  router.delete('/presentillnesshistory/:id', deletePresentillnesshistory);
  
  export default router;