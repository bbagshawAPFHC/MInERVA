import { Request, Response } from 'express';
  import PaymenthistoryModel from '../models/PaymenthistoryModel';
  
  // Get all paymenthistorys
  export const getAllPaymenthistory = async (req: Request, res: Response) => {
    try {
      const items = await PaymenthistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a paymenthistory by ID
  export const getPaymenthistoryById = async (req: Request, res: Response) => {
    try {
      const item = await PaymenthistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Paymenthistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new paymenthistory
  export const createPaymenthistory = async (req: Request, res: Response) => {
    const newItem = new PaymenthistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a paymenthistory by ID
  export const updatePaymenthistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await PaymenthistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Paymenthistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a paymenthistory by ID
  export const deletePaymenthistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await PaymenthistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Paymenthistory not found' });
      res.status(200).json({ message: 'Paymenthistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };