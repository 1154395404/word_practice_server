const mongoose = require('mongoose');
const utils = require('../utils/utils');
// 定义用户模型
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: () => new Date()
    },
    avatar: {
        type: String,
        default: () => `https://miumiu-1301368439.cos.ap-beijing.myqcloud.com/avatar/${utils.getRandomInteger(1, 8)}.jpg`
    },
    name: {
        type: String,
        default: () => '小用户' + utils.getRandomInteger(20, 10000)
    },
    school: {
        type: String,
        default: '唐山师范学院'
    },
    age: {
        type: Number,
        default: () => utils.getRandomInteger(18, 23)
    },
    sex: {
        type: Number,
        default: () => utils.getRandomInteger(0, 1)
    },
    signature: {
        type: String,
        default: () => '这个人很懒什么也没有写'
    },
    currentBookId: {
        type: String,
        default:'-1'
    },
});

// 创建模型
const User = mongoose.model('User', userSchema);

module.exports = User;
