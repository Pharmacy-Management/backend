const { Inventory, Medicine } = require('../models');

exports.addInventory = async (req, res) => {
  const { medicineId, quantity } = req.body;
  try {
    const inventory = await Inventory.create({ medicineId, quantity });
    res.status(201).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateInventory = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const inventory = await Inventory.findByPk(id);
    if (inventory) {
      await inventory.update({ quantity });
      res.status(200).json(inventory);
    } else {
      res.status(404).json({ error: 'Inventory not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteInventory = async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await Inventory.findByPk(id);
    if (inventory) {
      await inventory.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Inventory not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInventory = async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await Inventory.findByPk(id, { include: Medicine });
    if (inventory) {
      res.status(200).json(inventory);
    } else {
      res.status(404).json({ error: 'Inventory not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll({ include: Medicine });
    res.status(200).json(inventories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
