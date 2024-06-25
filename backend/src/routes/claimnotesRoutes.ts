import express from 'express';
  import { getAllClaimnotes, getClaimnotesById, createClaimnotes, updateClaimnotes, deleteClaimnotes } from '../controllers/claimnotesController';
  
  const router = express.Router();
  
  router.get('/claimnotes', getAllClaimnotes);
  router.get('/claimnotes/:id', getClaimnotesById);
  router.post('/claimnotes', createClaimnotes);
  router.put('/claimnotes/:id', updateClaimnotes);
  router.delete('/claimnotes/:id', deleteClaimnotes);
  
  export default router;