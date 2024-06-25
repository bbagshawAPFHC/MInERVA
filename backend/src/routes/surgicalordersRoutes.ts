import express from 'express';
  import { getAllSurgicalorders, getSurgicalordersById, createSurgicalorders, updateSurgicalorders, deleteSurgicalorders } from '../controllers/surgicalordersController';
  
  const router = express.Router();
  
  router.get('/surgicalorders', getAllSurgicalorders);
  router.get('/surgicalorders/:id', getSurgicalordersById);
  router.post('/surgicalorders', createSurgicalorders);
  router.put('/surgicalorders/:id', updateSurgicalorders);
  router.delete('/surgicalorders/:id', deleteSurgicalorders);
  
  export default router;