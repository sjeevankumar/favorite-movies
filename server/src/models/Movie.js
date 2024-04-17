const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema(
  {
    movie: {
      type: String,
    },
    director: {
      type: String,
    },
    release: {
      type: String,
    },
    genre: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Movie', MovieSchema)
