import express from 'express';
import { getAllDemographic, getDemographicById, createDemographic, updateDemographic, deleteDemographic, searchDemographic } from '../controllers/demographicController';

const router = express.Router();

router.get('/search', searchDemographic);
router.get('/', getAllDemographic);
router.get('/:id', getDemographicById);
router.post('/', createDemographic);
router.put('/:id', updateDemographic);
router.delete('/:id', deleteDemographic);

export default router;