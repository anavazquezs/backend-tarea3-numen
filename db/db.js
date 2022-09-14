const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Data base connected');
    } catch (err) {
        console.log(err);
        throw new Error('Error to connect to the data base');
    };
};

module.exports = { dbConnection };