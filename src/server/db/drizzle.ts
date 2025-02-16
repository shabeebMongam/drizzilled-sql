// import { config } from "dotenv";
// import { drizzle } from 'drizzle-orm/neon-http';


// config({ path: ".env" }); // or .env.local

// export const db = drizzle(process.env.DATABASE_URL!);

import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import { config } from "dotenv";

config({ path: ".env" });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });