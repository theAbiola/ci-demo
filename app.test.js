const request = require('supertest'); // for sending a fake HTTP request to our ExpressJS app without starting a server on a port. That’s why app.js exports the Express App and server.js (the part of the App that calls app.listen()) is kept separate
const { describe, it, expect } = require('@jest/globals');
const app = require('./app');

describe('GET /', () => {
  // describe() is a way to group related tests
  it(`should return 'Works on my machine.'`, async () => {
    // the it() block is just one test case
    const res = await request(app)
      .get('/') // the it() block sends a GET request
      .expect(200); // the it() closk expects a 200 response

    expect(res.text).toBe('Works on my machine.'); // we confirm that the response body text is exactly `Works on my machine.`
  });
});
