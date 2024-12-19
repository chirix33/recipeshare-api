import express from 'express';
import dotenv from 'dotenv';
import { Router, Request, Response } from 'express';
import { EstimateRecipeTimeController } from './controllers/estimateRecipeTimeController.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

const estimateRecipeTimeController = new EstimateRecipeTimeController();

// Set up routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/estimate-recipe-time', async (req: Request, res: Response) => {
  await estimateRecipeTimeController.estimateTime(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});