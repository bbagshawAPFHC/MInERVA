import express from 'express';
  import { getAllObepisodes, getObepisodesById, createObepisodes, updateObepisodes, deleteObepisodes } from '../controllers/obepisodesController';
  
  const router = express.Router();
  
  router.get('/obepisodes', getAllObepisodes);
  router.get('/obepisodes/:id', getObepisodesById);
  router.post('/obepisodes', createObepisodes);
  router.put('/obepisodes/:id', updateObepisodes);
  router.delete('/obepisodes/:id', deleteObepisodes);
  
  export default router;