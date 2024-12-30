const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routes'); // Centralized router

const app = express();
app.use(express.json());

// Use the centralized router for all API routes
app.use('/api', routes);

sequelize.authenticate()
    .then(() => console.log('Database connected.'))
    .catch((err) => console.error('Database connection error:', err));

app.listen(3000, () => console.log('Server running on port 3000.'));
