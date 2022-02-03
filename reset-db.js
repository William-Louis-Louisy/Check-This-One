const db = require("./db-config");
import Movies from "./models/movies";
import Series from "./models/series";

const collection = db.collection("movies");
async function reset() {
  await collection.deleteMany({});
  await Movies.createItem({
    content: "test",
    done: false,
  });
}

await collection.deleteMany({});
await Series.createItem({
  content: "test",
  done: false,
});

reset();
