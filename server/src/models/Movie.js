const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema(
    {
        movie: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        release: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Movie', MovieSchema)
