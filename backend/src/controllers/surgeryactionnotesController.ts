import { Request, Response } from 'express';
  import SurgeryactionnotesModel from '../models/SurgeryactionnotesModel';
  
  // Get all surgeryactionnotess
  export const getAllSurgeryactionnotes = async (req: Request, res: Response) => {
    try {
      const items = await SurgeryactionnotesModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a surgeryactionnotes by ID
  export const getSurgeryactionnotesById = async (req: Request, res: Response) => {
    try {
      const item = await SurgeryactionnotesModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Surgeryactionnotes not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new surgeryactionnotes
  export const createSurgeryactionnotes = async (req: Request, res: Response) => {
    const newItem = new SurgeryactionnotesModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a surgeryactionnotes by ID
  export const updateSurgeryactionnotes = async (req: Request, res: Response) => {
    try {
      const updatedItem = await SurgeryactionnotesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Surgeryactionnotes not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a surgeryactionnotes by ID
  export const deleteSurgeryactionnotes = async (req: Request, res: Response) => {
    try {
      const deletedItem = await SurgeryactionnotesModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Surgeryactionnotes not found' });
      res.status(200).json({ message: 'Surgeryactionnotes deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };