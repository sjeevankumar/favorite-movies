const Movie = require('../models/Movie')
const { StatusCodes } = require('http-status-codes')

const createMovie = async (req, res) => {
    const movie = await Movie.create(req.body)
    res.status(StatusCodes.CREATED).json({ movie })
}

const getAllMovies = async (req, res) => {
    const products = await Movie.find({})
    res.status(StatusCodes.OK).json({ products, count: products.length })
}
const getMovie = (req, res) => {
    res.send("getMovie")
}
const updateMovie = (req, res) => {
    res.send("updateMovie")
}
const deleteMovie = (req, res) => {
    res.send("deleteMovie")
}

module.exports = {
    createMovie,
    getAllMovies,
    getMovie,
    updateMovie,
    deleteMovie,
};