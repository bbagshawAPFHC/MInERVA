import { Request, Response } from 'express';
  import ClinicaldocumentModel from '../models/ClinicaldocumentModel';
  
  // Get all clinicaldocuments
  export const getAllClinicaldocument = async (req: Request, res: Response) => {
    try {
      const items = await ClinicaldocumentModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a clinicaldocument by ID
  export const getClinicaldocumentById = async (req: Request, res: Response) => {
    try {
      const item = await ClinicaldocumentModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Clinicaldocument not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new clinicaldocument
  export const createClinicaldocument = async (req: Request, res: Response) => {
    const newItem = new ClinicaldocumentModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a clinicaldocument by ID
  export const updateClinicaldocument = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ClinicaldocumentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Clinicaldocument not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a clinicaldocument by ID
  export const deleteClinicaldocument = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ClinicaldocumentModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Clinicaldocument not found' });
      res.status(200).json({ message: 'Clinicaldocument deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };