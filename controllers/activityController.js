const activityService = require('../services/activityService')
// const musicService = require('../services/musicService')
const request = require("../utils/request");
module.exports = {

    async insert(req, res) {

        try {
            const user = await activityService.insert(req.body)
            res.respond({
                message: '添加成功',
                data: user
            })
        } catch (e) {
            res.respond({
                message: '添加失败',
                data: null
            }, 403)
        }


    }, async query(req, res) {

        try {
            const {page, size, search} = req.query;
            const user = await activityService.query(page - 1, size, search)
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

    }, async update(req, res) {

        try {
            const user = await activityService.update(req.body.type, req.body)
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

    }, async delete(req, res) {

        try {
            const user = await activityService.delete(req.body._id)
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
    async queryBanner(req, res) {
        try {
            const banner = await activityService.find({type: 0})
            res.respond({
                message: '获取成功',
                data: banner
            })
        } catch (e) {
            res.respond({
                message: '获取失败',
                data: null
            }, 403)
        }
    },
    async getCloudBanner(req, res) {
        const list = []
        // request('/banner', 'get', {
        //     type: 2
        // }).then(({banners}) => {
        //     banners.forEach((b) => {
        //         list.push(b.pic)
        //     })
        //
        // })

        res.respond({
            message: '获取成功',
            data: list
        })
    },
    async importSort(req, res) {
        const {_id} = req.body
        const sort = await activityService.find({type: 1})

        if (sort.data.includes(_id)) {
            res.respond({
                message: '导入失败失败该歌区已在排行榜中',
            }, 403)
        } else if (sort.data.length === 50) {
            res.respond({
                message: '导入失败失败排行榜不能大于50首',
            }, 403)
        } else {
            sort.data.push(_id)
            await activityService.update(1, {data: sort.data})
            res.respond({
                message: '导入成功',
                data: null
            })
        }
    },

}
