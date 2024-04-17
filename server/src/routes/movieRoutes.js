const express = require("express")
const router = express.Router()

const {
    createMovie,
    getAllMovies,
    getSingleMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController")

router
    .route("/")
    .post(createMovie)
    .get(getAllMovies)

router
    .route("/:id")
    .get(getSingleMovie)
    .put(updateMovie)
    .delete(deleteMovie)

module.exports = router