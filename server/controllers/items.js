import mongoose from 'mongoose';
import express from 'express';

import Item from '../models/Item.js';

const router = express.Router();

export const addItem = async (req, res) => {
  //want to construct an item to insert into the database
  //pass in an object to new Item, name will come from request
  const item = req.body;
  //date is automatically inserted
  const newItem = new Item(item);
  //save object to database, promise-based(asychronous function that lets you do something
  //if it succeeds and do something else if it fails)
  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }  
}

export const deleteItem = async (req, res) => {
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await Item.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });

}

export const getItems = async (req, res) => {
    try {
         //want to fetch items from database
        const items = await Item.find()
            
        res.status(200).json(items).sort({ date: -1}); // descending order
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export default router;
