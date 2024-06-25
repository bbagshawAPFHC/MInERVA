import express from 'express';
  import { getAllEncountersummary, getEncountersummaryById, createEncountersummary, updateEncountersummary, deleteEncountersummary } from '../controllers/encountersummaryController';
  
  const router = express.Router();
  
  router.get('/encountersummary', getAllEncountersummary);
  router.get('/encountersummary/:id', getEncountersummaryById);
  router.post('/encountersummary', createEncountersummary);
  router.put('/encountersummary/:id', updateEncountersummary);
  router.delete('/encountersummary/:id', deleteEncountersummary);
  
  export default router;