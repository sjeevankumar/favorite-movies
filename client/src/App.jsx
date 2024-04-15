import Card from "./components/Card"

function App() {
  const movies = {
    "movies": [
      "The Godfather",
      "The Shawshank Redemption",
      "The Dark Knight",
      "Pulp Fiction",
      "Schindler's List",
      "Forrest Gump",
      "The Lord of the Rings: The Return of the King",
      "Fight Club",
      "Inception",
      "The Matrix",
      "Titanic",
      "Star Wars: Episode V - The Empire Strikes Back",
      "Goodfellas",
      "The Silence of the Lambs",
      "Jurassic Park",
      "The Avengers",
      "Interstellar",
      "Gladiator",
      "The Lion King",
      "Avatar"
    ]
  }

  return (
    <div>
      {
        movies.movies.map(movie => (
          <Card name={movie} />
        ))
      }
      <Card />
    </div>
  )
}

export default App