import { Request, Response } from 'express';
  import ClaimnotesModel from '../models/ClaimnotesModel';
  
  // Get all claimnotess
  export const getAllClaimnotes = async (req: Request, res: Response) => {
    try {
      const items = await ClaimnotesModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a claimnotes by ID
  export const getClaimnotesById = async (req: Request, res: Response) => {
    try {
      const item = await ClaimnotesModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Claimnotes not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new claimnotes
  export const createClaimnotes = async (req: Request, res: Response) => {
    const newItem = new ClaimnotesModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a claimnotes by ID
  export const updateClaimnotes = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ClaimnotesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Claimnotes not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a claimnotes by ID
  export const deleteClaimnotes = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ClaimnotesModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Claimnotes not found' });
      res.status(200).json({ message: 'Claimnotes deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };