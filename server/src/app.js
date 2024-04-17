require('dotenv').config()

// express
const express = require('express')
const app = express()

// rest of the packages

// database
const connectDB = require('./db/connect')

// routers
const movieRouter = require('./routes/movieRoutes')

app.use(express.json());

app.use('/api/v1/movies', movieRouter)

const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start()
// features:- 1)  complete authentication flow
// 2) addMovie, getAllMovies, getMovie,updateMovie,deleteMovie
// 3) filters:- based on movie genre, time period, language, industry
// 4) pagination
