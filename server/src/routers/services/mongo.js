const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = "mongodb+srv://20110426:vZQWnkijKXK8l4hU@cluster0.bd4b1th.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready!!!');
})

mongoose.connection.on('error', (err) => {
    console.log(err);
})


function mongoConnect() {
    mongoose.connect(MONGO_URL);
}

function mongoDisconnect() {
    mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}