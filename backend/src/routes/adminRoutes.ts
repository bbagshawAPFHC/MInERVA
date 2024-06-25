import express from 'express';
  import { getAllAdmin, getAdminById, createAdmin, updateAdmin, deleteAdmin } from '../controllers/adminController';
  
  const router = express.Router();
  
  router.get('/admin', getAllAdmin);
  router.get('/admin/:id', getAdminById);
  router.post('/admin', createAdmin);
  router.put('/admin/:id', updateAdmin);
  router.delete('/admin/:id', deleteAdmin);
  
  export default router;