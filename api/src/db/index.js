const mongoose = require('mongoose');

const dbName = "social-app";

async function dbConnect() {
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`);
}


module.exports = {
    dbConnect
};