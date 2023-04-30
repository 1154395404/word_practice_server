const mongoose = require('mongoose');

// 定义用户模型
const bookCategorySchema = new mongoose.Schema({
    name:{
        type: String,
        // 0 banner 1 musicSort
        default: ''
    },
    createDate: {
        type: Date,
        default: () => new Date()
    },
});

// 创建模型
const bookCategory = mongoose.model('bookCategory', bookCategorySchema);

module.exports = bookCategory;
