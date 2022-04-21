const findMovies = require('./index');
const dbMock = ["Iron Man2", "Thor2", "Doctor Strange2", "Deadpool2", "Venom2", "The Amazing Spider-Man2", "Captain America: The First Avenger2", "The Incredible Hulk2", "Captain Marvel2"];

it("This is my first test", () => {
    expect("hello").toEqual("hello")
    findMovies(dbMock, "the")
});

it("Search with empty result", () => {
    expect(findMovies(dbMock, "zzz")).toEqual([])
});

it("Search with 'the' keyword, expected non empty result", () => {
    expect(findMovies(dbMock, "the")).toEqual(["The Amazing Spider-Man2", "Captain America: The First Avenger2", "The Incredible Hulk2"])
});