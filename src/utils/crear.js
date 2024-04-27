"use strict";

const path = require("path");
const fs = require("fs");
const leer = require("../leer");

function crear(alumno) {
  const db = leer();

  db.push(alumno);

  const stringDb = JSON.stringify(db);
  fs.writeFileSync(path.resolve("db", "db.json"), stringDb);
}

module.exports = crear;
