import express from 'express';
  import { getAllCareteam, getCareteamById, createCareteam, updateCareteam, deleteCareteam } from '../controllers/careteamController';
  
  const router = express.Router();
  
  router.get('/careteam', getAllCareteam);
  router.get('/careteam/:id', getCareteamById);
  router.post('/careteam', createCareteam);
  router.put('/careteam/:id', updateCareteam);
  router.delete('/careteam/:id', deleteCareteam);
  
  export default router;