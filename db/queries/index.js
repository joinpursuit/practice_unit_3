const pgp = require('pg-promise')({});
const db = pgp('postgress://localhost:5432/practice_unit_3');

module.exports = { db }
