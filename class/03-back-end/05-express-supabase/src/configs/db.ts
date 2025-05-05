import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.SUPABASE_LINK,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool
  .connect()
  .then((client) => {
    console.info(`Database connected!`);
  })
  .catch((error) => {
    console.error("Failed to connect to the database!");
  });

export default pool;
