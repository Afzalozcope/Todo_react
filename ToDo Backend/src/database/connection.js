const knex=require('knex');
const config=require('./knexfile');
const dotenv=require('dotenv');
dotenv.config();
const knexInstance=knex(config[process.env.ENVIRONMENT]);

module.exports = knexInstance;