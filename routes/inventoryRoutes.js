const express = require('express');
const router = express.Router();
const { addInventory, updateInventory, deleteInventory, getInventory, getAllInventories } = require('../controllers/inventoryController');

router.post('/', addInventory);
router.put('/:id', updateInventory);
router.delete('/:id', deleteInventory);
router.get('/:id', getInventory);
router.get('/', getAllInventories);

module.exports = router;
