import { Request, Response } from 'express';
  import PhysicalexamModel from '../models/PhysicalexamModel';
  
  // Get all physicalexams
  export const getAllPhysicalexam = async (req: Request, res: Response) => {
    try {
      const items = await PhysicalexamModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a physicalexam by ID
  export const getPhysicalexamById = async (req: Request, res: Response) => {
    try {
      const item = await PhysicalexamModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Physicalexam not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new physicalexam
  export const createPhysicalexam = async (req: Request, res: Response) => {
    const newItem = new PhysicalexamModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a physicalexam by ID
  export const updatePhysicalexam = async (req: Request, res: Response) => {
    try {
      const updatedItem = await PhysicalexamModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Physicalexam not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a physicalexam by ID
  export const deletePhysicalexam = async (req: Request, res: Response) => {
    try {
      const deletedItem = await PhysicalexamModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Physicalexam not found' });
      res.status(200).json({ message: 'Physicalexam deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };