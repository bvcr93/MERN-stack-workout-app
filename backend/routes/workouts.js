const express = require("express");
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout }= require("../controllers/workoutController")
const router = express.Router();

//GET all workouts

router.get("/", getWorkouts );
router.get("/hello", () => {}); //this functions fires when the url is /api/wrkouts/hello

// when the url is just /api/workout it doesnt do anything

// GET single workout
router.get("/:id", getWorkout);

//POST new workout

router.post("/", createWorkout);
//DELETE a workout

router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
