import express from 'express';
import { getAllDemographic, getDemographicById, createDemographic, updateDemographic, deleteDemographic, searchDemographic } from '../controllers/demographicController';
  
  const router = express.Router();
  
  router.get('/demographic', getAllDemographic);
  router.get('/demographic/:id', getDemographicById);
  router.post('/demographic', createDemographic);
  router.put('/demographic/:id', updateDemographic);
  router.delete('/demographic/:id', deleteDemographic);
  router.get('/demographic/search', searchDemographic);

  export default router;