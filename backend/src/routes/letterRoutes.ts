import express from 'express';
  import { getAllLetter, getLetterById, createLetter, updateLetter, deleteLetter } from '../controllers/letterController';
  
  const router = express.Router();
  
  router.get('/letter', getAllLetter);
  router.get('/letter/:id', getLetterById);
  router.post('/letter', createLetter);
  router.put('/letter/:id', updateLetter);
  router.delete('/letter/:id', deleteLetter);
  
  export default router;