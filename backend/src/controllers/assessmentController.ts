import { Request, Response } from 'express';
  import AssessmentModel from '../models/AssessmentModel';
  
  // Get all assessments
  export const getAllAssessment = async (req: Request, res: Response) => {
    try {
      const items = await AssessmentModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a assessment by ID
  export const getAssessmentById = async (req: Request, res: Response) => {
    try {
      const item = await AssessmentModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Assessment not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new assessment
  export const createAssessment = async (req: Request, res: Response) => {
    const newItem = new AssessmentModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a assessment by ID
  export const updateAssessment = async (req: Request, res: Response) => {
    try {
      const updatedItem = await AssessmentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Assessment not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a assessment by ID
  export const deleteAssessment = async (req: Request, res: Response) => {
    try {
      const deletedItem = await AssessmentModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Assessment not found' });
      res.status(200).json({ message: 'Assessment deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };