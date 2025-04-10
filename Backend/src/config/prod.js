require('dotenv').config();
module.exports = {
    URL: process.env.URL,
    PORT: process.env.PORT || 4000,
    JWT_SECRET: process.env.JWT_SECRET,
}