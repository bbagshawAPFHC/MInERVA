import express from 'express';
  import { getAllAllergy, getAllergyById, createAllergy, updateAllergy, deleteAllergy } from '../controllers/allergyController';
  
  const router = express.Router();
  
  router.get('/allergy', getAllAllergy);
  router.get('/allergy/:id', getAllergyById);
  router.post('/allergy', createAllergy);
  router.put('/allergy/:id', updateAllergy);
  router.delete('/allergy/:id', deleteAllergy);
  
  export default router;