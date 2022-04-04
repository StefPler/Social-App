const mongoose = require('mongoose');

const dbName = "social-app";

async function dbConnect() {
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`);
}

function initDBListeners() {
    const db = mongoose.connection;

    db.on('connection', (stream) => {
        console.log('someone connected!', stream);
    });
    
    db.once('open', url => {
        console.log('Database connected:', url)
    });

    db.on('error', err => {
        console.error('connection error:', err)
    });
}



module.exports = {
    dbConnect,
    initDBListeners
};