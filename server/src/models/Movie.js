const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema(
    {
        name: {
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
        poster: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        watch: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Movie', MovieSchema)
