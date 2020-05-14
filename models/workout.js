const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout_db = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter a type"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter a name"
          },
          duration: {
            type: Number,
            required: "Enter a duration"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );

  workout_db.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workout_db);
  
  module.exports = Workout;