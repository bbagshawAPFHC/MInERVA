import { Request, Response } from 'express';
  import ReferralauthModel from '../models/ReferralauthModel';
  
  // Get all referralauths
  export const getAllReferralauth = async (req: Request, res: Response) => {
    try {
      const items = await ReferralauthModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a referralauth by ID
  export const getReferralauthById = async (req: Request, res: Response) => {
    try {
      const item = await ReferralauthModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Referralauth not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new referralauth
  export const createReferralauth = async (req: Request, res: Response) => {
    const newItem = new ReferralauthModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a referralauth by ID
  export const updateReferralauth = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ReferralauthModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Referralauth not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a referralauth by ID
  export const deleteReferralauth = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ReferralauthModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Referralauth not found' });
      res.status(200).json({ message: 'Referralauth deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };