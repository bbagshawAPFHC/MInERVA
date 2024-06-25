import express from 'express';
  import { getAllPhysicalexam, getPhysicalexamById, createPhysicalexam, updatePhysicalexam, deletePhysicalexam } from '../controllers/physicalexamController';
  
  const router = express.Router();
  
  router.get('/physicalexam', getAllPhysicalexam);
  router.get('/physicalexam/:id', getPhysicalexamById);
  router.post('/physicalexam', createPhysicalexam);
  router.put('/physicalexam/:id', updatePhysicalexam);
  router.delete('/physicalexam/:id', deletePhysicalexam);
  
  export default router;