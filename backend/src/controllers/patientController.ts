import { Request, Response } from 'express';
import { getAllPatients, getPatientById } from '../services/patientService';

export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await getAllPatients();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPatient = async (req: Request, res: Response) => {
  try {
    const patient = await getPatientById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
