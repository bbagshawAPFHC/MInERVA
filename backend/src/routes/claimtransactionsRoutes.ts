import express from 'express';
  import { getAllClaimtransactions, getClaimtransactionsById, createClaimtransactions, updateClaimtransactions, deleteClaimtransactions } from '../controllers/claimtransactionsController';
  
  const router = express.Router();
  
  router.get('/claimtransactions', getAllClaimtransactions);
  router.get('/claimtransactions/:id', getClaimtransactionsById);
  router.post('/claimtransactions', createClaimtransactions);
  router.put('/claimtransactions/:id', updateClaimtransactions);
  router.delete('/claimtransactions/:id', deleteClaimtransactions);
  
  export default router;