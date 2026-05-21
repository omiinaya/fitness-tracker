# Database Setup: Fitness Tracker

## Local MongoDB

1. Install MongoDB Community Edition: https://www.mongodb.com/try/download/community
2. Start MongoDB server:
   ```bash
   mongod
   ```
3. The app will connect to `mongodb://localhost/fitness-tracker` by default.

## MongoDB Atlas (Cloud)

1. Create a free cluster at https://www.mongodb.com/cloud/atlas
2. Whitelist your IP and create a database user
3. Get your connection string and set it as `MONGODB_URI` in your `.env` file

## Database Schema

- See `models/workout.js` for schema details
- Workouts are stored with an array of exercises (resistance or cardio)

## Seeding/Test Data

- You can use the app UI or API to create workouts and exercises
- For automated tests, see `test/api.test.js`

---

For more, see the main `README.md` and `DEPLOYMENT.md`.
