import { Request, Response } from 'express';
  import PresentillnesshistoryModel from '../models/PresentillnesshistoryModel';
  
  // Get all presentillnesshistorys
  export const getAllPresentillnesshistory = async (req: Request, res: Response) => {
    try {
      const items = await PresentillnesshistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a presentillnesshistory by ID
  export const getPresentillnesshistoryById = async (req: Request, res: Response) => {
    try {
      const item = await PresentillnesshistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Presentillnesshistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new presentillnesshistory
  export const createPresentillnesshistory = async (req: Request, res: Response) => {
    const newItem = new PresentillnesshistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a presentillnesshistory by ID
  export const updatePresentillnesshistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await PresentillnesshistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Presentillnesshistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a presentillnesshistory by ID
  export const deletePresentillnesshistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await PresentillnesshistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Presentillnesshistory not found' });
      res.status(200).json({ message: 'Presentillnesshistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };