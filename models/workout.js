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
            required: [true, "Enter a type"],
            enum: ['resistance', 'cardio']
          },
          name: {
            type: String,
            trim: true,
            required: [true, "Enter a name"]
          },
          duration: {
            type: Number,
            required: [true, "Enter a duration"],
            min: [1, "Duration must be at least 1 minute"]
          },
          weight: {
            type: Number,
            min: [0, "Weight must be positive"]
          },
          reps: {
            type: Number,
            min: [0, "Reps must be positive"]
          },
          sets: {
            type: Number,
            min: [0, "Sets must be positive"]
          },
          distance: {
            type: Number,
            min: [0, "Distance must be positive"]
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

  // Virtual for total duration
  workout_db.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + (exercise.duration || 0);
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workout_db);
  
  module.exports = Workout;