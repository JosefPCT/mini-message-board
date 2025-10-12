#! /usr/bin/env node
// require('dotenv').config()

const { argv } = require('node:process');

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  data TEXT,
  username VARCHAR (255),
  added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (data, username)
VALUES
  ('I am the first message', 'Alex'),
  ('I am the second message', 'Bruno');
`;

async function main(){
  console.log("seeding...");
  const client = new Client({
    //Format: `postgres://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE_NAME}
    // connectionString: `postgres://koyeb-adm:npg_S0V8ldAMKnbk@ep-weathered-sky-a1sika2p.ap-southeast-1.pg.koyeb.app/koyebdb`
    // connectionString: `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`
    connectionString: argv[2]
    // connectionString: `postgres://koyeb-adm:npg_S0V8ldAMKnbk@ep-weathered-sky-a1sika2p.ap-southeast-1.pg.koyeb.app/koyebdb?sslmode=require`
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();