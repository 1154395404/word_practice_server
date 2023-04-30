const mongoose = require('mongoose');
const utils = require('../utils/utils');

// 定义用户模型
const activitySchema = new mongoose.Schema({
    type:{
        type: Number,
        // 0 banner 1 musicSort
        default: 0
    },
    data:{
        type:Array,
        default:[],
    }
});

// 创建模型
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
