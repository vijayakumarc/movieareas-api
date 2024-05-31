import express from "express";
import {
  MoiveCreate,
  MoiveDelete,
  MoiveUpdate,
  MovieIndex,
} from "../controller/movie.controller.js";

const router = express.Router();

//For Reading movies
router.get("/", MovieIndex);

//For Creating movies
router.post("/", MoiveCreate);

//For Updating movie
router.put("/:id", MoiveUpdate);

//For Deleting movie

router.delete("/:id", MoiveDelete);

export default router;
