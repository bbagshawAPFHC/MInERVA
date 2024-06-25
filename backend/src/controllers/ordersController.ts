import { Request, Response } from 'express';
  import OrdersModel from '../models/OrdersModel';
  
  // Get all orderss
  export const getAllOrders = async (req: Request, res: Response) => {
    try {
      const items = await OrdersModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a orders by ID
  export const getOrdersById = async (req: Request, res: Response) => {
    try {
      const item = await OrdersModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Orders not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new orders
  export const createOrders = async (req: Request, res: Response) => {
    const newItem = new OrdersModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a orders by ID
  export const updateOrders = async (req: Request, res: Response) => {
    try {
      const updatedItem = await OrdersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Orders not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a orders by ID
  export const deleteOrders = async (req: Request, res: Response) => {
    try {
      const deletedItem = await OrdersModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Orders not found' });
      res.status(200).json({ message: 'Orders deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };