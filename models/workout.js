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
                required: "Enter a name for transaction"
            },
            distance: Number,
            duration: Number,
            weight: Number,
            sets: Number,
            reps: Number,
        }
    ]
    },
    // {
    //     toJSON: { virtuals: true },
    // }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;