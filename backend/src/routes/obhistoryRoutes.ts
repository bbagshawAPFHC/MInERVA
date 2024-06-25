import express from 'express';
  import { getAllObhistory, getObhistoryById, createObhistory, updateObhistory, deleteObhistory } from '../controllers/obhistoryController';
  
  const router = express.Router();
  
  router.get('/obhistory', getAllObhistory);
  router.get('/obhistory/:id', getObhistoryById);
  router.post('/obhistory', createObhistory);
  router.put('/obhistory/:id', updateObhistory);
  router.delete('/obhistory/:id', deleteObhistory);
  
  export default router;