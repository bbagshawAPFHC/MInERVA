import express from 'express';
  import { getAllGynhistory, getGynhistoryById, createGynhistory, updateGynhistory, deleteGynhistory } from '../controllers/gynhistoryController';
  
  const router = express.Router();
  
  router.get('/gynhistory', getAllGynhistory);
  router.get('/gynhistory/:id', getGynhistoryById);
  router.post('/gynhistory', createGynhistory);
  router.put('/gynhistory/:id', updateGynhistory);
  router.delete('/gynhistory/:id', deleteGynhistory);
  
  export default router;