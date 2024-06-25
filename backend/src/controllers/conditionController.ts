import { Request, Response } from 'express';
  import ConditionModel from '../models/ConditionModel';
  
  // Get all conditions
  export const getAllCondition = async (req: Request, res: Response) => {
    try {
      const items = await ConditionModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a condition by ID
  export const getConditionById = async (req: Request, res: Response) => {
    try {
      const item = await ConditionModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Condition not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new condition
  export const createCondition = async (req: Request, res: Response) => {
    const newItem = new ConditionModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a condition by ID
  export const updateCondition = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ConditionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Condition not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a condition by ID
  export const deleteCondition = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ConditionModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Condition not found' });
      res.status(200).json({ message: 'Condition deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };