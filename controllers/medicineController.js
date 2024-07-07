const { Medicine } = require('../models');

exports.addMedicine = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const medicine = await Medicine.create({ name, description, price, quantity });
    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMedicine = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  try {
    const medicine = await Medicine.findByPk(id);
    if (medicine) {
      await medicine.update({ name, description, price, quantity });
      res.status(200).json(medicine);
    } else {
      res.status(404).json({ error: 'Medicine not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMedicine = async (req, res) => {
  const { id } = req.params;
  try {
    const medicine = await Medicine.findByPk(id);
    if (medicine) {
      await medicine.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Medicine not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMedicine = async (req, res) => {
  const { id } = req.params;
  try {
    const medicine = await Medicine.findByPk(id);
    if (medicine) {
      res.status(200).json(medicine);
    } else {
      res.status(404).json({ error: 'Medicine not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.findAll();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
