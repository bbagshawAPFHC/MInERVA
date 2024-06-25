import { Request, Response } from 'express';
  import SocialhistoryModel from '../models/SocialhistoryModel';
  
  // Get all socialhistorys
  export const getAllSocialhistory = async (req: Request, res: Response) => {
    try {
      const items = await SocialhistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a socialhistory by ID
  export const getSocialhistoryById = async (req: Request, res: Response) => {
    try {
      const item = await SocialhistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Socialhistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new socialhistory
  export const createSocialhistory = async (req: Request, res: Response) => {
    const newItem = new SocialhistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a socialhistory by ID
  export const updateSocialhistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await SocialhistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Socialhistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a socialhistory by ID
  export const deleteSocialhistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await SocialhistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Socialhistory not found' });
      res.status(200).json({ message: 'Socialhistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };