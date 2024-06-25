import { Request, Response } from 'express';
  import AllergyModel from '../models/AllergyModel';
  
  // Get all allergys
  export const getAllAllergy = async (req: Request, res: Response) => {
    try {
      const items = await AllergyModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a allergy by ID
  export const getAllergyById = async (req: Request, res: Response) => {
    try {
      const item = await AllergyModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Allergy not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new allergy
  export const createAllergy = async (req: Request, res: Response) => {
    const newItem = new AllergyModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a allergy by ID
  export const updateAllergy = async (req: Request, res: Response) => {
    try {
      const updatedItem = await AllergyModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Allergy not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a allergy by ID
  export const deleteAllergy = async (req: Request, res: Response) => {
    try {
      const deletedItem = await AllergyModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Allergy not found' });
      res.status(200).json({ message: 'Allergy deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };