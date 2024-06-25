import express from 'express';
  import { getAllLabresults, getLabresultsById, createLabresults, updateLabresults, deleteLabresults } from '../controllers/labresultsController';
  
  const router = express.Router();
  
  router.get('/labresults', getAllLabresults);
  router.get('/labresults/:id', getLabresultsById);
  router.post('/labresults', createLabresults);
  router.put('/labresults/:id', updateLabresults);
  router.delete('/labresults/:id', deleteLabresults);
  
  export default router;