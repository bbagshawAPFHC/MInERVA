import { Request, Response } from 'express';
  import GoalModel from '../models/GoalModel';
  
  // Get all goals
  export const getAllGoal = async (req: Request, res: Response) => {
    try {
      const items = await GoalModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a goal by ID
  export const getGoalById = async (req: Request, res: Response) => {
    try {
      const item = await GoalModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Goal not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new goal
  export const createGoal = async (req: Request, res: Response) => {
    const newItem = new GoalModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a goal by ID
  export const updateGoal = async (req: Request, res: Response) => {
    try {
      const updatedItem = await GoalModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Goal not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a goal by ID
  export const deleteGoal = async (req: Request, res: Response) => {
    try {
      const deletedItem = await GoalModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Goal not found' });
      res.status(200).json({ message: 'Goal deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };