import { Request, Response } from 'express';
  import ClaimtransactionsModel from '../models/ClaimtransactionsModel';
  
  // Get all claimtransactionss
  export const getAllClaimtransactions = async (req: Request, res: Response) => {
    try {
      const items = await ClaimtransactionsModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a claimtransactions by ID
  export const getClaimtransactionsById = async (req: Request, res: Response) => {
    try {
      const item = await ClaimtransactionsModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Claimtransactions not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new claimtransactions
  export const createClaimtransactions = async (req: Request, res: Response) => {
    const newItem = new ClaimtransactionsModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a claimtransactions by ID
  export const updateClaimtransactions = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ClaimtransactionsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Claimtransactions not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a claimtransactions by ID
  export const deleteClaimtransactions = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ClaimtransactionsModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Claimtransactions not found' });
      res.status(200).json({ message: 'Claimtransactions deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };