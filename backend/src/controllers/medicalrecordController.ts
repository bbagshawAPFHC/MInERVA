import { Request, Response } from 'express';
  import MedicalrecordModel from '../models/MedicalrecordModel';
  
  // Get all medicalrecords
  export const getAllMedicalrecord = async (req: Request, res: Response) => {
    try {
      const items = await MedicalrecordModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a medicalrecord by ID
  export const getMedicalrecordById = async (req: Request, res: Response) => {
    try {
      const item = await MedicalrecordModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Medicalrecord not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new medicalrecord
  export const createMedicalrecord = async (req: Request, res: Response) => {
    const newItem = new MedicalrecordModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a medicalrecord by ID
  export const updateMedicalrecord = async (req: Request, res: Response) => {
    try {
      const updatedItem = await MedicalrecordModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Medicalrecord not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a medicalrecord by ID
  export const deleteMedicalrecord = async (req: Request, res: Response) => {
    try {
      const deletedItem = await MedicalrecordModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Medicalrecord not found' });
      res.status(200).json({ message: 'Medicalrecord deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };