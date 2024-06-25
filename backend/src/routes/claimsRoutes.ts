import express from 'express';
  import { getAllClaims, getClaimsById, createClaims, updateClaims, deleteClaims } from '../controllers/claimsController';
  
  const router = express.Router();
  
  router.get('/claims', getAllClaims);
  router.get('/claims/:id', getClaimsById);
  router.post('/claims', createClaims);
  router.put('/claims/:id', updateClaims);
  router.delete('/claims/:id', deleteClaims);
  
  export default router;