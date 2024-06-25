import express from 'express';
  import { getAllOtherccdas, getOtherccdasById, createOtherccdas, updateOtherccdas, deleteOtherccdas } from '../controllers/otherccdasController';
  
  const router = express.Router();
  
  router.get('/otherccdas', getAllOtherccdas);
  router.get('/otherccdas/:id', getOtherccdasById);
  router.post('/otherccdas', createOtherccdas);
  router.put('/otherccdas/:id', updateOtherccdas);
  router.delete('/otherccdas/:id', deleteOtherccdas);
  
  export default router;