import { Request, Response } from 'express';
  import LetterModel from '../models/LetterModel';
  
  // Get all letters
  export const getAllLetter = async (req: Request, res: Response) => {
    try {
      const items = await LetterModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a letter by ID
  export const getLetterById = async (req: Request, res: Response) => {
    try {
      const item = await LetterModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Letter not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new letter
  export const createLetter = async (req: Request, res: Response) => {
    const newItem = new LetterModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a letter by ID
  export const updateLetter = async (req: Request, res: Response) => {
    try {
      const updatedItem = await LetterModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Letter not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a letter by ID
  export const deleteLetter = async (req: Request, res: Response) => {
    try {
      const deletedItem = await LetterModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Letter not found' });
      res.status(200).json({ message: 'Letter deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };