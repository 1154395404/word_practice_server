const mongoose = require('mongoose');
const time = require('../utils/time');
const utils = require("../utils/utils");
// 定义用户模型
const bookSchema = new mongoose.Schema({
    timeSign: {
        type: Number,
        default: () => time.signIntTime()
    },
    createDate: {
        type: Number,
        default: () => new Date().getTime()
    },
    cover: {
        type: String,
        default: () => `https://miumiu-1301368439.cos.ap-beijing.myqcloud.com/avatar/${utils.getRandomInteger(1, 8)}.jpg`
    },
    name: {
        type: String,
        default: () => '单词本名称'
    },
    categoryId: {
        type: String,
        default: '-1'
    },
    userId: {
        type: String,
        default: '-1'
    },
    word: {
        type: String,
        default: ''
    },
    wordArr: {
        type: Array,
        default: []
    },
    desc: {
        type: String,
        default: ''
    }
});
// 有categoryId 证明不是自创本

// 创建模型
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
