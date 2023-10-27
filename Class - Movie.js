class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Creating an instance of Movie with default rating "PG"
const defaultRatedMovie = new Movie("Default Rated Movie", "Default Studios");

// Creating an array of Movie instances
const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3"),
    new Movie("Movie4", "Studio4", "PG")
];

// Getting PG rated movies
const pgMovies = Movie.getPG(movies);

// Output the PG rated movies
console.log(pgMovies);

// Output the instance of Casino Royale
console.log(casinoRoyale);
