import { Request, Response } from 'express';
  import ClaimsModel from '../models/ClaimsModel';
  
  // Get all claimss
  export const getAllClaims = async (req: Request, res: Response) => {
    try {
      const items = await ClaimsModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a claims by ID
  export const getClaimsById = async (req: Request, res: Response) => {
    try {
      const item = await ClaimsModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Claims not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new claims
  export const createClaims = async (req: Request, res: Response) => {
    const newItem = new ClaimsModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a claims by ID
  export const updateClaims = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ClaimsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Claims not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a claims by ID
  export const deleteClaims = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ClaimsModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Claims not found' });
      res.status(200).json({ message: 'Claims deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };