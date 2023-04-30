const adminService = require('../services/adminService')
const jwt = require("../utils/jwt");
const utils = require("../utils/utils");
module.exports = {
    async register(req, res) {
        const {password, username} = req.body;
        try {
            const user = await adminService.addUser(username, password)
            res.respond({
                message: '注册成功',
                data: user
            })
        } catch (e) {
            if (e.code === 11000) {
                res.respond({
                    message: '该用户已被注册',
                }, 403)
            } else {
                res.respond({
                    message: e.message,
                }, 403)
            }
        }

    },
    async login(req, res) {
        const {password, username} = req.body;
        try {
            const user = await adminService.login(username, password)
            res.respond({
                message: '登录成功',
                data: {
                    token: jwt.sign(utils.parse(user))
                }
            })

        } catch (e) {
            console.log(e.message)
            res.respond({
                status: 0,
                message: '登录失败 用户名或密码错误'
            }, 403);
        }
    },
    async getInfo(req, res) {

        const user = await adminService.getUserById(req.user._id)
        res.respond({
            data: user,
            message: '用户信息获取成功'
        })

    },

    async logoff(req, res) {

        const data = await adminService.deleteUser(req.user._id)
        res.respond({
            data,
            message: '删除成功'
        })
    },


    async update(req, res) {
        const {_id} = req.body
        try {
            await adminService.updateUser(_id, req.body);
            res.respond({
                status: 200,
                msg: '修改成功',
            })
        } catch (e) {

            res.respond({
                status: 200,
                msg: '修改失败',
            }, 403)
        }

    },
    async getAllUsers(req, res) {
        const {page, size} = req.query
        const list = await adminService.getAllUsers(page - 1, size)
        const count = await adminService.getUsersCount()
        res.respond({
            status: 200,
            msg: '获取成功',
            data:{
                list,
                count
            }
        })
    }
}
