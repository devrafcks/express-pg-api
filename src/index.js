import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes


// Error handling

// Server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});