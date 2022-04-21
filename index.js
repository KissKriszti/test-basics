const marvelMovies = ["Iron Man", "Thor", "Doctor Strange", "Deadpool", "Venom", "The Amazing Spider-Man", "Captain America: The First Avenger", "The Incredible Hulk", "Captain Marvel"];

function findMovies(arr, word) {

    const result = arr.filter(movie => {
    
        if (movie.toLowerCase().includes(word.toLowerCase())) {
            return movie
        };

    });

    return result.slice(0,5);
};

module.exports = findMovies;