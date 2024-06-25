import express from 'express';
  import { getAllAssessment, getAssessmentById, createAssessment, updateAssessment, deleteAssessment } from '../controllers/assessmentController';
  
  const router = express.Router();
  
  router.get('/assessment', getAllAssessment);
  router.get('/assessment/:id', getAssessmentById);
  router.post('/assessment', createAssessment);
  router.put('/assessment/:id', updateAssessment);
  router.delete('/assessment/:id', deleteAssessment);
  
  export default router;