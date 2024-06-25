import { Request, Response } from 'express';
  import TopicofdiscussionModel from '../models/TopicofdiscussionModel';
  
  // Get all topicofdiscussions
  export const getAllTopicofdiscussion = async (req: Request, res: Response) => {
    try {
      const items = await TopicofdiscussionModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a topicofdiscussion by ID
  export const getTopicofdiscussionById = async (req: Request, res: Response) => {
    try {
      const item = await TopicofdiscussionModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Topicofdiscussion not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new topicofdiscussion
  export const createTopicofdiscussion = async (req: Request, res: Response) => {
    const newItem = new TopicofdiscussionModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a topicofdiscussion by ID
  export const updateTopicofdiscussion = async (req: Request, res: Response) => {
    try {
      const updatedItem = await TopicofdiscussionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Topicofdiscussion not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a topicofdiscussion by ID
  export const deleteTopicofdiscussion = async (req: Request, res: Response) => {
    try {
      const deletedItem = await TopicofdiscussionModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Topicofdiscussion not found' });
      res.status(200).json({ message: 'Topicofdiscussion deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };