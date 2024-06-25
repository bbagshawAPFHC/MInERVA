import express from 'express';
  import { getAllCondition, getConditionById, createCondition, updateCondition, deleteCondition } from '../controllers/conditionController';
  
  const router = express.Router();
  
  router.get('/condition', getAllCondition);
  router.get('/condition/:id', getConditionById);
  router.post('/condition', createCondition);
  router.put('/condition/:id', updateCondition);
  router.delete('/condition/:id', deleteCondition);
  
  export default router;