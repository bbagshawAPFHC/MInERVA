import express from 'express';
  import { getAllSurgicalhistory, getSurgicalhistoryById, createSurgicalhistory, updateSurgicalhistory, deleteSurgicalhistory } from '../controllers/surgicalhistoryController';
  
  const router = express.Router();
  
  router.get('/surgicalhistory', getAllSurgicalhistory);
  router.get('/surgicalhistory/:id', getSurgicalhistoryById);
  router.post('/surgicalhistory', createSurgicalhistory);
  router.put('/surgicalhistory/:id', updateSurgicalhistory);
  router.delete('/surgicalhistory/:id', deleteSurgicalhistory);
  
  export default router;