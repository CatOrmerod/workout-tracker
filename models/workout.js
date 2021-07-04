const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
    day: { 
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Cardio or Resistance?"
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
                required: true, 
                min: [1, 'Press complete to finish']
            },
            distance: Number,
            weight: Number,
            sets: Number,
            reps: Number,
        }
    ]
    },
    {
        toJSON: { virtuals: true },
    }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;