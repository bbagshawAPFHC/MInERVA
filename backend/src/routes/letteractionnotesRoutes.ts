import express from 'express';
  import { getAllLetteractionnotes, getLetteractionnotesById, createLetteractionnotes, updateLetteractionnotes, deleteLetteractionnotes } from '../controllers/letteractionnotesController';
  
  const router = express.Router();
  
  router.get('/letteractionnotes', getAllLetteractionnotes);
  router.get('/letteractionnotes/:id', getLetteractionnotesById);
  router.post('/letteractionnotes', createLetteractionnotes);
  router.put('/letteractionnotes/:id', updateLetteractionnotes);
  router.delete('/letteractionnotes/:id', deleteLetteractionnotes);
  
  export default router;