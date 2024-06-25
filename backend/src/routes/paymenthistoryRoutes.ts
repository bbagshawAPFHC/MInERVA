import express from 'express';
  import { getAllPaymenthistory, getPaymenthistoryById, createPaymenthistory, updatePaymenthistory, deletePaymenthistory } from '../controllers/paymenthistoryController';
  
  const router = express.Router();
  
  router.get('/paymenthistory', getAllPaymenthistory);
  router.get('/paymenthistory/:id', getPaymenthistoryById);
  router.post('/paymenthistory', createPaymenthistory);
  router.put('/paymenthistory/:id', updatePaymenthistory);
  router.delete('/paymenthistory/:id', deletePaymenthistory);
  
  export default router;