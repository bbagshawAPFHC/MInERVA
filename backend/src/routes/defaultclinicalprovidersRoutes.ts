import express from 'express';
  import { getAllDefaultclinicalproviders, getDefaultclinicalprovidersById, createDefaultclinicalproviders, updateDefaultclinicalproviders, deleteDefaultclinicalproviders } from '../controllers/defaultclinicalprovidersController';
  
  const router = express.Router();
  
  router.get('/defaultclinicalproviders', getAllDefaultclinicalproviders);
  router.get('/defaultclinicalproviders/:id', getDefaultclinicalprovidersById);
  router.post('/defaultclinicalproviders', createDefaultclinicalproviders);
  router.put('/defaultclinicalproviders/:id', updateDefaultclinicalproviders);
  router.delete('/defaultclinicalproviders/:id', deleteDefaultclinicalproviders);
  
  export default router;