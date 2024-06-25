import { Request, Response } from 'express';
  import CareteamModel from '../models/CareteamModel';
  
  // Get all careteams
  export const getAllCareteam = async (req: Request, res: Response) => {
    try {
      const items = await CareteamModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a careteam by ID
  export const getCareteamById = async (req: Request, res: Response) => {
    try {
      const item = await CareteamModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Careteam not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new careteam
  export const createCareteam = async (req: Request, res: Response) => {
    const newItem = new CareteamModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a careteam by ID
  export const updateCareteam = async (req: Request, res: Response) => {
    try {
      const updatedItem = await CareteamModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Careteam not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a careteam by ID
  export const deleteCareteam = async (req: Request, res: Response) => {
    try {
      const deletedItem = await CareteamModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Careteam not found' });
      res.status(200).json({ message: 'Careteam deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };