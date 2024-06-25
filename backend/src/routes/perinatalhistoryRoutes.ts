import express from 'express';
  import { getAllPerinatalhistory, getPerinatalhistoryById, createPerinatalhistory, updatePerinatalhistory, deletePerinatalhistory } from '../controllers/perinatalhistoryController';
  
  const router = express.Router();
  
  router.get('/perinatalhistory', getAllPerinatalhistory);
  router.get('/perinatalhistory/:id', getPerinatalhistoryById);
  router.post('/perinatalhistory', createPerinatalhistory);
  router.put('/perinatalhistory/:id', updatePerinatalhistory);
  router.delete('/perinatalhistory/:id', deletePerinatalhistory);
  
  export default router;