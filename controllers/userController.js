const userService = require('../services/userService')
const adminService = require("../services/adminService");
const jwt = require("../utils/jwt");
const utils = require("../utils/utils");

module.exports = {
    async addUser(req, res) {

    },
    async register(req, res) {
        const {password, email,name} = req.body;
        try {
            const user = await userService.addUser({email, password,name})
            res.respond({
                message: '注册成功',
                data: user
            })
        } catch (e) {
            if (e.code === 11000) {
                res.respond({
                    message: '该邮箱已被注册',
                }, 403)
            } else {
                res.respond({
                    message: e.message,
                }, 403)
            }
        }
    },
   async login(req,res){
       const {password, email} = req.body;
       try {
           const user = await userService.login(email, password)
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

        const user = await userService.getUserById(req.user._id)
        res.respond({
            data: user,
            message: '用户信息获取成功'
        })

    },
    async getUserList(req, res) {
        const {page, size, search} = req.query;
        const data = await userService.getList(page - 1, size, search)
        res.respond({
            message: '列表数据获取成功',
            data
        })

    }
    , async update(req,res) {

        try {
            const user = await userService.update(req.body._id,req.body)
            res.respond({
                message: '更新成功',
                data: user
            })
        } catch (e) {
            if (e.code === 11000) {
                res.respond({
                    message: '更新失败-该邮箱已被注册',
                }, 403)
            }else{
                res.respond({
                    message: '更新失败',
                    data: null
                }, 403)
            }

        }

    }, async delete(req,res) {

        try {
            const user = await userService.delete(req.body._id)
            res.respond({
                message: '删除成功',
                data: user
            })
        } catch (e) {
            res.respond({
                message: '删除失败',
                data: null
            }, 403)
        }

    },
    async getAllUsers(req, res) {

    },
    async updateUser(req, res) {

    },
    async deleteUser(req, res) {

    }
}
