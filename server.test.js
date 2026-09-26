const request = require('supertest');
const server = require('./server');

describe('GET / - HTTP Server Test Suite', () => {
  afterAll((done) => {
    // Gracefully close the HTTP server instance after tests finish
    server.close(done);
  });

  test('Should return status 200 OK', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('Should return "Hello World" in the body', async () => {
    const response = await request(server).get('/');
    expect(response.text).toContain('Hello World');
  });

  test('Should return Content-Type header as text/plain', async () => {
    const response = await request(server).get('/');
    expect(response.headers['content-type']).toMatch(/text\/plain/);
  });
});
