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

describe("POST /api/forum", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a list of all forums", async () => {
    return request(app)
      .post("/api/forum")
      .send({ forum_id: 3, forum_text: "test", user_id: 1 })
      .expect("Content-Type", /json/)
      .expect(201);
  });

  afterAll(() => {
    app.close();
  });
});

describe("GET /api/forum/1", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a forum", async () => {
    return request(app)
      .get("/api/forum/1")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(() => {
    app.close();
  });
});

describe("PUT /api/forum/1", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a forum", async () => {
    return request(app)
      .put("/api/forum/1")
      .send({ forum_id: 1, forum_text: "test", user_id: 1 })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(() => {
    app.close();
  });
});

describe("DELETE /api/forum/1", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a forum", async () => {
    return request(app)
      .delete("/api/forum/1")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(() => {
    app.close();
  });
});

describe("GET /api/forum/1/replies", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a list of all replies", async () => {
    return request(app)
      .get("/api/forum/1/replies")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(() => {
    app.close();
  });
});


describe("POST /api/forum/1/replies", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a list of all replies", async () => {
    return request(app)
      .post("/api/forum/1/replies")
      .send({ reply_id: 1, reply_text: "test", user_id: 1 })
      .expect("Content-Type", /json/)
      .expect(201);
  });

  afterAll(() => {
    app.close();
  });
});

describe("PUT /api/forum/1/replies/1", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a list of all replies", async () => {
    return request(app)
      .put("/api/forum/1/replies/1")
      .send({ reply_id: 1, reply_text: "test", user_id: 1 })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(() => {
    app.close();
  });
});


describe("DELETE /api/forum/1/replies/1", () => {
  beforeAll(() => {
    //here dummy database can be initialized
  });
  test("respond with json containing a list of all replies", async () => {
    return request(app)
      .delete("/api/forum/1/replies/1")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(() => {
    app.close();
  });
});


// Path: test/forum.test.js