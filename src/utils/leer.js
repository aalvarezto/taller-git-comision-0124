"use strict";
const path = require("path");
const fs = require("fs");

function leer() {
  const archivo = fs.readFileSync(path.resolve("db", "db.json")).toString();
  const archivoParseado = JSON.parse(archivo);

  return archivoParseado;
}

module.exports = leer;
