import express from 'express';
  import { getAllScreening, getScreeningById, createScreening, updateScreening, deleteScreening } from '../controllers/screeningController';
  
  const router = express.Router();
  
  router.get('/screening', getAllScreening);
  router.get('/screening/:id', getScreeningById);
  router.post('/screening', createScreening);
  router.put('/screening/:id', updateScreening);
  router.delete('/screening/:id', deleteScreening);
  
  export default router;