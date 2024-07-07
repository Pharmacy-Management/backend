const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/inventories', inventoryRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
});
