const db = require("./db-config");
import Movies from "./models/movies";
import Series from "./models/series";

const collection = db.collection("movies");
async function reset() {
  await collection.deleteMany({});
  await Movies.createMovie({
    content: "test",
    added: false,
  });

  await db.collection("series").deleteMany({});
  await Series.createSerie({
    content: "test",
    added: false,
  });
}

reset();
