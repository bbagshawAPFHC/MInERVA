import express from 'express';
  import { getAllImagingresult, getImagingresultById, createImagingresult, updateImagingresult, deleteImagingresult } from '../controllers/imagingresultController';
  
  const router = express.Router();
  
  router.get('/imagingresult', getAllImagingresult);
  router.get('/imagingresult/:id', getImagingresultById);
  router.post('/imagingresult', createImagingresult);
  router.put('/imagingresult/:id', updateImagingresult);
  router.delete('/imagingresult/:id', deleteImagingresult);
  
  export default router;