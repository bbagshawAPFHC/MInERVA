import express from 'express';
  import { getAllVitals, getVitalsById, createVitals, updateVitals, deleteVitals } from '../controllers/vitalsController';
  
  const router = express.Router();
  
  router.get('/vitals', getAllVitals);
  router.get('/vitals/:id', getVitalsById);
  router.post('/vitals', createVitals);
  router.put('/vitals/:id', updateVitals);
  router.delete('/vitals/:id', deleteVitals);
  
  export default router;