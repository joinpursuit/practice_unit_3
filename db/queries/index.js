const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/practice_unit_3');

module.exports = { db }
