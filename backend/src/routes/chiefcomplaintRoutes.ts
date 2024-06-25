import express from 'express';
  import { getAllChiefcomplaint, getChiefcomplaintById, createChiefcomplaint, updateChiefcomplaint, deleteChiefcomplaint } from '../controllers/chiefcomplaintController';
  
  const router = express.Router();
  
  router.get('/chiefcomplaint', getAllChiefcomplaint);
  router.get('/chiefcomplaint/:id', getChiefcomplaintById);
  router.post('/chiefcomplaint', createChiefcomplaint);
  router.put('/chiefcomplaint/:id', updateChiefcomplaint);
  router.delete('/chiefcomplaint/:id', deleteChiefcomplaint);
  
  export default router;