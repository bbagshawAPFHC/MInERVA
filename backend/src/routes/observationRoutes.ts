import express from 'express';
  import { getAllObservation, getObservationById, createObservation, updateObservation, deleteObservation } from '../controllers/observationController';
  
  const router = express.Router();
  
  router.get('/observation', getAllObservation);
  router.get('/observation/:id', getObservationById);
  router.post('/observation', createObservation);
  router.put('/observation/:id', updateObservation);
  router.delete('/observation/:id', deleteObservation);
  
  export default router;