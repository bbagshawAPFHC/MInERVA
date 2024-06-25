import express from 'express';
  import { getAllDemographic, getDemographicById, createDemographic, updateDemographic, deleteDemographic } from '../controllers/demographicController';
  
  const router = express.Router();
  
  router.get('/demographic', getAllDemographic);
  router.get('/demographic/:id', getDemographicById);
  router.post('/demographic', createDemographic);
  router.put('/demographic/:id', updateDemographic);
  router.delete('/demographic/:id', deleteDemographic);
  
  export default router;