import { test, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

test('if the base route works as expected', async () => {
	const reponse = await request(app).get('/');
	
});