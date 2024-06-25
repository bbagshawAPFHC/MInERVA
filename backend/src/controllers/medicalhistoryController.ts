import { Request, Response } from 'express';
  import MedicalhistoryModel from '../models/MedicalhistoryModel';
  
  // Get all medicalhistorys
  export const getAllMedicalhistory = async (req: Request, res: Response) => {
    try {
      const items = await MedicalhistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a medicalhistory by ID
  export const getMedicalhistoryById = async (req: Request, res: Response) => {
    try {
      const item = await MedicalhistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Medicalhistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new medicalhistory
  export const createMedicalhistory = async (req: Request, res: Response) => {
    const newItem = new MedicalhistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a medicalhistory by ID
  export const updateMedicalhistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await MedicalhistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Medicalhistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a medicalhistory by ID
  export const deleteMedicalhistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await MedicalhistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Medicalhistory not found' });
      res.status(200).json({ message: 'Medicalhistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };