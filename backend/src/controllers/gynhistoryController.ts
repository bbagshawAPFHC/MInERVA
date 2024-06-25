import { Request, Response } from 'express';
  import GynhistoryModel from '../models/GynhistoryModel';
  
  // Get all gynhistorys
  export const getAllGynhistory = async (req: Request, res: Response) => {
    try {
      const items = await GynhistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a gynhistory by ID
  export const getGynhistoryById = async (req: Request, res: Response) => {
    try {
      const item = await GynhistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Gynhistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new gynhistory
  export const createGynhistory = async (req: Request, res: Response) => {
    const newItem = new GynhistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a gynhistory by ID
  export const updateGynhistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await GynhistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Gynhistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a gynhistory by ID
  export const deleteGynhistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await GynhistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Gynhistory not found' });
      res.status(200).json({ message: 'Gynhistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };