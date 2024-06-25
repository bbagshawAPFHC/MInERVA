import { Request, Response } from 'express';
  import PatientinsuranceModel from '../models/PatientinsuranceModel';
  
  // Get all patientinsurances
  export const getAllPatientinsurance = async (req: Request, res: Response) => {
    try {
      const items = await PatientinsuranceModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a patientinsurance by ID
  export const getPatientinsuranceById = async (req: Request, res: Response) => {
    try {
      const item = await PatientinsuranceModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Patientinsurance not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new patientinsurance
  export const createPatientinsurance = async (req: Request, res: Response) => {
    const newItem = new PatientinsuranceModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a patientinsurance by ID
  export const updatePatientinsurance = async (req: Request, res: Response) => {
    try {
      const updatedItem = await PatientinsuranceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Patientinsurance not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a patientinsurance by ID
  export const deletePatientinsurance = async (req: Request, res: Response) => {
    try {
      const deletedItem = await PatientinsuranceModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Patientinsurance not found' });
      res.status(200).json({ message: 'Patientinsurance deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };