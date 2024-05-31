import express from "express";

const router = express.Router();



//For Reading movies
router.get("/", (req,res) => {
res.send('Get all movies')
});

//For Creating movies
router.post("/", (req,res) => {
    res.send('Create all movies')
});

//For Updating movie
router.put("/:id", (req,res) => {
    res.send('Update movies')
});

//For Deleting movie

router.delete("/:id", (req,res) => {
    res.send('delete movies')
});

export default router;
