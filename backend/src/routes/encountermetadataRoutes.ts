import express from 'express';
  import { getAllEncountermetadata, getEncountermetadataById, createEncountermetadata, updateEncountermetadata, deleteEncountermetadata } from '../controllers/encountermetadataController';
  
  const router = express.Router();
  
  router.get('/encountermetadata', getAllEncountermetadata);
  router.get('/encountermetadata/:id', getEncountermetadataById);
  router.post('/encountermetadata', createEncountermetadata);
  router.put('/encountermetadata/:id', updateEncountermetadata);
  router.delete('/encountermetadata/:id', deleteEncountermetadata);
  
  export default router;