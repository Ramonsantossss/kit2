require('../configuração');
const mongoose = require('mongoose');

function connectMongoDb() {
    mongoose.connect('mongodb+srv://clover:clover@cluster0.nwnmodz.mongodb.net/?retryWrites=true&w=majority', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'conexão error:'));
    db.once('open', () => {
      console.log('[INFO] Ayu APIs conectada na db!');
    });
};

module.exports.connectMongoDb = connectMongoDb;
