const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const Workout = require("../models/workout");
let app;

describe("API Routes", () => {
  beforeAll(async () => {
    app = express();
    app.use(express.json());
    require("../routes/api-routes")(app);
    await mongoose.connect("mongodb://localhost/fitness-tracker-test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });

  it("should create a new workout", async () => {
    const res = await request(app)
      .post("/api/workouts")
      .send({
        exercises: [{ type: "cardio", name: "Run", duration: 30, distance: 5 }],
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.exercises[0].name).toBe("Run");
  });

  it("should not create workout with invalid data", async () => {
    const res = await request(app)
      .post("/api/workouts")
      .send({
        exercises: [{ type: "", name: "", duration: -5 }],
      });
    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toBeDefined();
  });

  it("should get all workouts", async () => {
    const res = await request(app).get("/api/workouts");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
