const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const { swaggerUi, specs } = require('./config/swagger');

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync().then(() => {
    console.log('Database connected');
}).catch(err => console.log('Error connection database:', err));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});