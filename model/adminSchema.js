const mongoose = require('mongoose');
const utils = require('../utils/utils');

// 定义用户模型
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '管理员'+utils.getRandomInteger(0,100000)
    },
    username: {
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
        default: ()=>new Date()
    },
});

// 创建模型
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
