import express from 'express';
  import { getAllSocialhistory, getSocialhistoryById, createSocialhistory, updateSocialhistory, deleteSocialhistory } from '../controllers/socialhistoryController';
  
  const router = express.Router();
  
  router.get('/socialhistory', getAllSocialhistory);
  router.get('/socialhistory/:id', getSocialhistoryById);
  router.post('/socialhistory', createSocialhistory);
  router.put('/socialhistory/:id', updateSocialhistory);
  router.delete('/socialhistory/:id', deleteSocialhistory);
  
  export default router;