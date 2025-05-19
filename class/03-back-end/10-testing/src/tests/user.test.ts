import request from "supertest";
import app from "../app";

beforeAll(() => {
  // Initialize DB connection, mock setup, or global config if needed
  console.log("Start test suite: /api/v1/users");
});

beforeEach(() => {
  // Reset state, seed DB, or mock fresh data before each test
  console.log("Before each test");
});

afterEach(() => {
  // Clean up after each test (e.g., clear mocks or reset data)
  console.log("After each test");
});

afterAll(() => {
  // Close DB connection, cleanup global resources
  console.log("End test suite: /api/v1/users");
});

describe("GET /api/v1/users", () => {
  it("should return an array of users inside a data object", async () => {
    const response = await request(app).get("/api/v1/users");

    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(300);

    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body.data)).toBe(true);

    if (response.body.data.length > 0) {
      const user = response.body.data[0];
      expect(user).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          firstName: expect.any(String),
          lastName: expect.any(String),
          email: expect.stringMatching(/@/),
          createdAt: expect.any(String),
          updatetAt: expect.any(String),
        })
      );
    }
  });
});
