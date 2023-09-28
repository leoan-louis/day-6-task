//1)The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:



class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the class Movie
var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Testing the getPG method
var movies = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "PG-13"),
    new Movie("Movie 3", "Studio C", "R"),
    new Movie("Movie 4", "Studio D")
];

var pgMovies = Movie.getPG(movies);

console.log(pgMovies);