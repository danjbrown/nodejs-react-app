import express from 'express';
import { UserRoutes } from './routes/user-routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', UserRoutes);

app.get('/healthcheck', (req, res) => {
    res.status(200).send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});