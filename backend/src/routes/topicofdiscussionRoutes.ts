import express from 'express';
  import { getAllTopicofdiscussion, getTopicofdiscussionById, createTopicofdiscussion, updateTopicofdiscussion, deleteTopicofdiscussion } from '../controllers/topicofdiscussionController';
  
  const router = express.Router();
  
  router.get('/topicofdiscussion', getAllTopicofdiscussion);
  router.get('/topicofdiscussion/:id', getTopicofdiscussionById);
  router.post('/topicofdiscussion', createTopicofdiscussion);
  router.put('/topicofdiscussion/:id', updateTopicofdiscussion);
  router.delete('/topicofdiscussion/:id', deleteTopicofdiscussion);
  
  export default router;