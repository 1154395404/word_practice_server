const userService = require('../services/userService_example')
module.exports = {
    async addUser(req, res) {
        const {email, password, name} = req.body;
        const user = await userService.addUser(name, email, password)
        res.send({
            status: 200,
            msg: '添加成功',
            data: user
        })
    },
    async getAllUsers(req, res) {
        const {page, size} = req.query;
        const list = await userService.getAllUsers(page - 1, size)
        const count = await userService.getUsersCount();
        res.send({
            status: 200,
            msg: '查询成功',
            data: {
                list,
                count
            }
        })
    },
    async updateUser(req, res) {
        const {_id, name, email} = req.body
        await userService.updateUser(_id, name, email);
        const data = await userService.getUserById(_id)
        res.send({
            status: 200,
            msg: '修改成功',
            data
        })
    },
    async deleteUser(req, res) {
        const {_id,} = req.body
        try {
            await userService.deleteUser(_id);
            res.send({
                status: 200,
                msg: '删除成功',
                data: true
            })
        } catch (e) {
            res.send({
                status: 500,
                msg: '删除失败',
                data: e.message
            })
        }
    },

    async insert(req,res) {

        try {
            const user = await userService.insert(req.body)
            res.respond({
                message: '添加成功',
                data: user
            })
        }catch (e) {
            res.respond({
                message: '添加失败',
                data: null
            },403)
        }


    }, async query(req,res) {

        try {
            const {page, size, search} = req.query;
            const user = await userService.query(page-1,size,search)
            res.respond({
                message: '查询成功',
                data: user
            })
        } catch (e) {
            res.respond({
                message: '查询失败',
                data: null
            }, 403)
        }

    }, async update(req,res) {

        try {
            const user = await userService.update(req.body._id,req.body)
            res.respond({
                message: '更新成功',
                data: user
            })
        } catch (e) {
            res.respond({
                message: '更新失败',
                data: null
            }, 403)
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

    }
}
