import { Request, Response } from 'express';
  import LetteractionnotesModel from '../models/LetteractionnotesModel';
  
  // Get all letteractionnotess
  export const getAllLetteractionnotes = async (req: Request, res: Response) => {
    try {
      const items = await LetteractionnotesModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a letteractionnotes by ID
  export const getLetteractionnotesById = async (req: Request, res: Response) => {
    try {
      const item = await LetteractionnotesModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Letteractionnotes not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new letteractionnotes
  export const createLetteractionnotes = async (req: Request, res: Response) => {
    const newItem = new LetteractionnotesModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a letteractionnotes by ID
  export const updateLetteractionnotes = async (req: Request, res: Response) => {
    try {
      const updatedItem = await LetteractionnotesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Letteractionnotes not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a letteractionnotes by ID
  export const deleteLetteractionnotes = async (req: Request, res: Response) => {
    try {
      const deletedItem = await LetteractionnotesModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Letteractionnotes not found' });
      res.status(200).json({ message: 'Letteractionnotes deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };