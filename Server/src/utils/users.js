require("dotenv").config();
const {PASSWORD} = process.env;

const users = [{email: "lucas@henry.com" , password: PASSWORD }]

module.exports = users;