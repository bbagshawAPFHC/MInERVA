import { Request, Response } from 'express';
  import ObepisodesModel from '../models/ObepisodesModel';
  
  // Get all obepisodess
  export const getAllObepisodes = async (req: Request, res: Response) => {
    try {
      const items = await ObepisodesModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a obepisodes by ID
  export const getObepisodesById = async (req: Request, res: Response) => {
    try {
      const item = await ObepisodesModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Obepisodes not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new obepisodes
  export const createObepisodes = async (req: Request, res: Response) => {
    const newItem = new ObepisodesModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a obepisodes by ID
  export const updateObepisodes = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ObepisodesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Obepisodes not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a obepisodes by ID
  export const deleteObepisodes = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ObepisodesModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Obepisodes not found' });
      res.status(200).json({ message: 'Obepisodes deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };