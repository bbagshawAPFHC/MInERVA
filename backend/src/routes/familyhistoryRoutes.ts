import express from 'express';
  import { getAllFamilyhistory, getFamilyhistoryById, createFamilyhistory, updateFamilyhistory, deleteFamilyhistory } from '../controllers/familyhistoryController';
  
  const router = express.Router();
  
  router.get('/familyhistory', getAllFamilyhistory);
  router.get('/familyhistory/:id', getFamilyhistoryById);
  router.post('/familyhistory', createFamilyhistory);
  router.put('/familyhistory/:id', updateFamilyhistory);
  router.delete('/familyhistory/:id', deleteFamilyhistory);
  
  export default router;