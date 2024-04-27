"use strict";

const path = require("path");
const fs = require("fs");

const archivo = fs.readFileSync(path.resolve("db", "db.json")).toString();

console.log(archivo);
