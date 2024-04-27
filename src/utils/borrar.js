"use strict";

const path = require("path");
const fs = require("fs");
const leer = require("./leer");

function borrar(id) {
  const db = leer();

  const dbFiltrada = db.filter((alumno) => alumno.id !== id);

  const stringDb = JSON.stringify(dbFiltrada);
  fs.writeFileSync(path.resolve("db", "db.json"), stringDb);
}

module.exports = borrar;
