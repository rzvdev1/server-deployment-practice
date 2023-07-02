'use strict';
const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server);

describe('Testing our server', () => {
  test('request to goodbye route sends string goodbye', async () => {
    const response = await request.get('/goodbye');
    expect(response.text).toBe('Goodbye World!');
  });
  test('request to hello route sends string hello with a timestap', async () => {
    const response = await request.get('/hello');
    expect(response.text).toContain('Hello World!');
  });
  test('handles undefined routes', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
});
