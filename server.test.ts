import { test, expect } from 'vitest';
import request from 'supertest';
import app from './src/app.js';

test('the base route works as expected', async () => {
	const response = await request(app).get('/');
	expect(response.statusCode).toBe(200);
	expect(response.text.length).toBeGreaterThan(250);
});

test('the /books route works', async () => {
	const response = await request(app).get('/books');
	expect(response.statusCode).toBe(200);
});

test('the /books route returns all books', async () => {
	const response = await request(app).get('/books');
	expect(JSON.parse(response.text).length).toBe(35);
});