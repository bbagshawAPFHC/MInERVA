import express from 'express';
  import { getAllEncounterphonecallchecklists, getEncounterphonecallchecklistsById, createEncounterphonecallchecklists, updateEncounterphonecallchecklists, deleteEncounterphonecallchecklists } from '../controllers/encounterphonecallchecklistsController';
  
  const router = express.Router();
  
  router.get('/encounterphonecallchecklists', getAllEncounterphonecallchecklists);
  router.get('/encounterphonecallchecklists/:id', getEncounterphonecallchecklistsById);
  router.post('/encounterphonecallchecklists', createEncounterphonecallchecklists);
  router.put('/encounterphonecallchecklists/:id', updateEncounterphonecallchecklists);
  router.delete('/encounterphonecallchecklists/:id', deleteEncounterphonecallchecklists);
  
  export default router;