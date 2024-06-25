import { Request, Response } from 'express';
  import OtherccdasModel from '../models/OtherccdasModel';
  
  // Get all otherccdass
  export const getAllOtherccdas = async (req: Request, res: Response) => {
    try {
      const items = await OtherccdasModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a otherccdas by ID
  export const getOtherccdasById = async (req: Request, res: Response) => {
    try {
      const item = await OtherccdasModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Otherccdas not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new otherccdas
  export const createOtherccdas = async (req: Request, res: Response) => {
    const newItem = new OtherccdasModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a otherccdas by ID
  export const updateOtherccdas = async (req: Request, res: Response) => {
    try {
      const updatedItem = await OtherccdasModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Otherccdas not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a otherccdas by ID
  export const deleteOtherccdas = async (req: Request, res: Response) => {
    try {
      const deletedItem = await OtherccdasModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Otherccdas not found' });
      res.status(200).json({ message: 'Otherccdas deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };