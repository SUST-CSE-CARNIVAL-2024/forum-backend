// create jest test for forum
const app = require("../index");
const request = require("supertest");

describe("GET /api/forum", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a list of all forums", async () => {
    return request(app)
      .get("/api/forum")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(() => {
    app.close();
  });
});