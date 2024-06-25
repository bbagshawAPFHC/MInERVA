import { Request, Response } from 'express';
  import ReviewofsystemsModel from '../models/ReviewofsystemsModel';
  
  // Get all reviewofsystemss
  export const getAllReviewofsystems = async (req: Request, res: Response) => {
    try {
      const items = await ReviewofsystemsModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a reviewofsystems by ID
  export const getReviewofsystemsById = async (req: Request, res: Response) => {
    try {
      const item = await ReviewofsystemsModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Reviewofsystems not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new reviewofsystems
  export const createReviewofsystems = async (req: Request, res: Response) => {
    const newItem = new ReviewofsystemsModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a reviewofsystems by ID
  export const updateReviewofsystems = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ReviewofsystemsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Reviewofsystems not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a reviewofsystems by ID
  export const deleteReviewofsystems = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ReviewofsystemsModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Reviewofsystems not found' });
      res.status(200).json({ message: 'Reviewofsystems deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };