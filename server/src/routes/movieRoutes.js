const express = require("express")
const router = express.Router()

const {
    createMovie,
    getAllMovies,
    getMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController")

router
    .route("/")
    .post(createMovie)
    .get(getAllMovies)

router
    .route("/:id")
    .get(getMovie)
    .put(updateMovie)
    .delete(deleteMovie)

module.exports = router