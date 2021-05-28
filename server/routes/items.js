import express from 'express';

const router = express.Router();

import { addItem, getItems, deleteItem } from '../controllers/items.js';

import auth from '../middleware/auth.js';

// @route GET request to api/items
// @desc Get All Items
// @access Public

//the slash represents endpoint of api/items, already in correct file
router.get('/', auth, getItems);

router.post('/', auth, addItem);
  
//the /:id represents a placeholder for whatever we pass in as an id
router.delete('/:id', auth, deleteItem);

export default router;
