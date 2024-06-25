import express from 'express';
  import { getAllEncounters, getEncountersById, createEncounters, updateEncounters, deleteEncounters } from '../controllers/encountersController';
  
  const router = express.Router();
  
  router.get('/encounters', getAllEncounters);
  router.get('/encounters/:id', getEncountersById);
  router.post('/encounters', createEncounters);
  router.put('/encounters/:id', updateEncounters);
  router.delete('/encounters/:id', deleteEncounters);
  
  export default router;