import express from 'express';
import { UserRoutes } from './routes/user-routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

app.use('/api', UserRoutes);

app.get('/healthcheck', (req, res) => {
    res.status(200).send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});