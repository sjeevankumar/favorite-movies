const Movie = require('../models/Movie')
const { StatusCodes } = require('http-status-codes')

const createMovie = async (req, res) => {
  const movie = await Movie.create(req.body)
  res.status(StatusCodes.CREATED).json({ movie })
}

const getAllMovies = async (req, res) => {
  const movies = await Movie.find({})
  res.status(StatusCodes.OK).json({ movies, count: movies.length })
}
const getSingleMovie = async (req, res) => {
  const { id: movieId } = req.params
  const movie = await Movie.findOne({ _id: movieId })
  res.status(StatusCodes.OK).json({ movie })
}
const updateMovie = async (req, res) => {
  const { id: movieId } = req.params
  const movie = await Movie.findOneAndUpdate({ _id: movieId }, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(StatusCodes.OK).json({ movie })
}
const deleteMovie = async (req, res) => {
  const { id: movieId } = req.params
  await Movie.findOneAndDelete({ _id: movieId })
  res.status(StatusCodes.NO_CONTENT).send()
}

module.exports = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  updateMovie,
  deleteMovie,
}
