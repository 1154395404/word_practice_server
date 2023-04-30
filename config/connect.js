const mongoose = require('mongoose');

// Replace YOUR_MONGODB_URI with the connection string for your MongoDB database
const uri = 'mongodb://localhost:27017/WordPractice';
mongoose.set("strictQuery", false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('数据库连接成功~');
});
