import express from 'express';
  import { getAllGoal, getGoalById, createGoal, updateGoal, deleteGoal } from '../controllers/goalController';
  
  const router = express.Router();
  
  router.get('/goal', getAllGoal);
  router.get('/goal/:id', getGoalById);
  router.post('/goal', createGoal);
  router.put('/goal/:id', updateGoal);
  router.delete('/goal/:id', deleteGoal);
  
  export default router;