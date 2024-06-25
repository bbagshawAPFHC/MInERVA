import { Request, Response } from 'express';
  import ObservationModel from '../models/ObservationModel';
  
  // Get all observations
  export const getAllObservation = async (req: Request, res: Response) => {
    try {
      const items = await ObservationModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a observation by ID
  export const getObservationById = async (req: Request, res: Response) => {
    try {
      const item = await ObservationModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Observation not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new observation
  export const createObservation = async (req: Request, res: Response) => {
    const newItem = new ObservationModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a observation by ID
  export const updateObservation = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ObservationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Observation not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a observation by ID
  export const deleteObservation = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ObservationModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Observation not found' });
      res.status(200).json({ message: 'Observation deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };