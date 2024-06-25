import express from 'express';
  import { getAllImmunization, getImmunizationById, createImmunization, updateImmunization, deleteImmunization } from '../controllers/immunizationController';
  
  const router = express.Router();
  
  router.get('/immunization', getAllImmunization);
  router.get('/immunization/:id', getImmunizationById);
  router.post('/immunization', createImmunization);
  router.put('/immunization/:id', updateImmunization);
  router.delete('/immunization/:id', deleteImmunization);
  
  export default router;