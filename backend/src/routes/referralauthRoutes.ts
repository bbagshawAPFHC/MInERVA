import express from 'express';
  import { getAllReferralauth, getReferralauthById, createReferralauth, updateReferralauth, deleteReferralauth } from '../controllers/referralauthController';
  
  const router = express.Router();
  
  router.get('/referralauth', getAllReferralauth);
  router.get('/referralauth/:id', getReferralauthById);
  router.post('/referralauth', createReferralauth);
  router.put('/referralauth/:id', updateReferralauth);
  router.delete('/referralauth/:id', deleteReferralauth);
  
  export default router;