import { Request, Response } from 'express';
import { getAllPatients, getPatientById, searchPatientsByName, getRecordsByPatientId } from '../services/patientService';

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

export const searchPatients = async (req: Request, res: Response) => {
  try {
    const patients = await searchPatientsByName(req.query.name as string);
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPatientRecords = async (req: Request, res: Response) => {
  try {
    const records = await getRecordsByPatientId(req.params.athenapatientid);
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
