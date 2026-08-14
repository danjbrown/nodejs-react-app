import request from 'supertest';
import { UserRoutes } from '../src/routes/user-routes.js';
import express from 'express';

const app = express();
app.use('/api', UserRoutes);

describe('User API', () => {
  it('should return a greeting', async () => {
    const response = await request(app).get('/api/user').send();
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello, Test User!');
  });
});

describe('User data API', () => {
  it('should return user data', async () => {
    const response = await request(app).get('/api/user').send();
    expect(response.status).toBe(200);
  });
});
