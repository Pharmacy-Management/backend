const express = require('express');
const router = express.Router();
const { addMedicine, updateMedicine, deleteMedicine, getMedicine, getAllMedicines } = require('../controllers/medicineController');

router.post('/', addMedicine);
router.put('/:id', updateMedicine);
router.delete('/:id', deleteMedicine);
router.get('/:id', getMedicine);
router.get('/', getAllMedicines);

module.exports = router;
