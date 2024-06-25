import express from 'express';
  import { getAllReviewofsystems, getReviewofsystemsById, createReviewofsystems, updateReviewofsystems, deleteReviewofsystems } from '../controllers/reviewofsystemsController';
  
  const router = express.Router();
  
  router.get('/reviewofsystems', getAllReviewofsystems);
  router.get('/reviewofsystems/:id', getReviewofsystemsById);
  router.post('/reviewofsystems', createReviewofsystems);
  router.put('/reviewofsystems/:id', updateReviewofsystems);
  router.delete('/reviewofsystems/:id', deleteReviewofsystems);
  
  export default router;