import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorhandler.js';
import createUserTable from './data/createUserTable.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Error handling
app.use(errorHandler);

// create Table users
createUserTable()

// test db
app.get('/', async (req, res) => {
  const result = await pool.query('SELECT current_database()');
  res.send('the database name is ' + result.rows[0].current_database);
});


// Server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});