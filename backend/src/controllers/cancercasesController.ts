import { Request, Response } from 'express';
  import CancercasesModel from '../models/CancercasesModel';
  
  // Get all cancercasess
  export const getAllCancercases = async (req: Request, res: Response) => {
    try {
      const items = await CancercasesModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a cancercases by ID
  export const getCancercasesById = async (req: Request, res: Response) => {
    try {
      const item = await CancercasesModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Cancercases not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new cancercases
  export const createCancercases = async (req: Request, res: Response) => {
    const newItem = new CancercasesModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a cancercases by ID
  export const updateCancercases = async (req: Request, res: Response) => {
    try {
      const updatedItem = await CancercasesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Cancercases not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a cancercases by ID
  export const deleteCancercases = async (req: Request, res: Response) => {
    try {
      const deletedItem = await CancercasesModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Cancercases not found' });
      res.status(200).json({ message: 'Cancercases deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };