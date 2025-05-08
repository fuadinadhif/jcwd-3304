import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
import pool from "../configs/db.js";

const authors = [
  {
    id: uuidv4(),
    name: "John Cena",
    email: "john.cena@mail.com",
    point: 100,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Emma Watson",
    email: "emma.watson@mail.com",
    point: 85,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Robert Downey",
    email: "robert.downey@mail.com",
    point: 92,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Scarlett Johansson",
    email: "scarlett.johansson@mail.com",
    point: 77,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Chris Evans",
    email: "chris.evans@mail.com",
    point: 88,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Jennifer Lawrence",
    email: "jennifer.lawrence@mail.com",
    point: 94,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Tom Holland",
    email: "tom.holland@mail.com",
    point: 80,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Gal Gadot",
    email: "gal.gadot@mail.com",
    point: 91,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Ryan Reynolds",
    email: "ryan.reynolds@mail.com",
    point: 87,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Zendaya",
    email: "zendaya@mail.com",
    point: 78,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Chris Hemsworth",
    email: "chris.hemsworth@mail.com",
    point: 89,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Natalie Portman",
    email: "natalie.portman@mail.com",
    point: 83,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Mark Ruffalo",
    email: "mark.ruffalo@mail.com",
    point: 90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Brie Larson",
    email: "brie.larson@mail.com",
    point: 82,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Benedict Cumberbatch",
    email: "benedict.cumberbatch@mail.com",
    point: 86,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Anne Hathaway",
    email: "anne.hathaway@mail.com",
    point: 88,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Dwayne Johnson",
    email: "dwayne.johnson@mail.com",
    point: 93,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Margot Robbie",
    email: "margot.robbie@mail.com",
    point: 81,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Leonardo DiCaprio",
    email: "leonardo.dicaprio@mail.com",
    point: 95,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Mila Kunis",
    email: "mila.kunis@mail.com",
    point: 79,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Daniel Radcliffe",
    email: "daniel.radcliffe@mail.com",
    point: 85,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Angelina Jolie",
    email: "angelina.jolie@mail.com",
    point: 91,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Will Smith",
    email: "will.smith@mail.com",
    point: 88,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Keanu Reeves",
    email: "keanu.reeves@mail.com",
    point: 96,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Charlize Theron",
    email: "charlize.theron@mail.com",
    point: 84,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Johnny Depp",
    email: "johnny.depp@mail.com",
    point: 89,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Emily Blunt",
    email: "emily.blunt@mail.com",
    point: 90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Jake Gyllenhaal",
    email: "jake.gyllenhaal@mail.com",
    point: 87,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Sandra Bullock",
    email: "sandra.bullock@mail.com",
    point: 86,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Henry Cavill",
    email: "henry.cavill@mail.com",
    point: 94,
    created_at: new Date(),
  },
];
const articles = [];
const addresses = [];

async function seed() {
  try {
    await pool.query(`DELETE FROM authors`);

    console.info("Data deleted 🚮");

    for (const author of authors) {
      await pool.query(
        `INSERT INTO authors (id, name, email, point, created_at)
        VALUES ($1, $2, $3, $4, $5)`,
        [author.id, author.name, author.email, author.point, author.created_at]
      );
    }

    console.info(`Seeding completed 🌱`);
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed 👎🏼", error);
    process.exit(1);
  }
}

seed();

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// const array = [100, 300, 40, 50, 60];

// for (const el of array) {
//   console.log(el);
// }
