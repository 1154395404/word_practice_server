const bookService = require('../services/bookService')
const utils= require('../utils/utils')
const time= require('../utils/time')
module.exports = {
    async insert(req,res) {

        try {
            req.body.wordArr=utils.parseWordStr(req.body.word)
            const user = await bookService.insert(req.body)
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
            const user = await bookService.query(page-1,size,search)
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

    }, async query_c(req,res) {

        try {
            const {page, size, search} = req.query;
            const user = await bookService.query_c(page-1,size,search)
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

    },
    async query_my_book(req,res) {

        try {
            const {page, size, search} = req.query;
            const user = await bookService.query_my_book(req.user._id,page-1,size,search)
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

    },

    async update(req,res) {

        try {
            req.body.wordArr=utils.parseWordStr(req.body.word)
            const user = await bookService.update(req.body._id,req.body)
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
            const user = await bookService.delete(req.body._id)
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

    async viewTodayAddList(req,res){

        const id=req.user._id
        const createDate=time.signIntTime(0)
       try {
           const list =await bookService.viewTodayAddList(id,createDate)
           res.respond({
               message: '查询成功',
               data: list
           })
       }catch (e) {
           res.respond({
               message: '查询失败',
               data: list
           }, 403)
       }
    },
    async getOneBook(req,res){

       try {
           const list =await bookService.getDataById(req.query.id)
           res.respond({
               message: '查询成功',
               data: list
           })
       }catch (e) {
           res.respond({
               message: '查询失败',
               data: {}
           }, 403)
       }
    },
    async viewReview(req,res){
        // console.log(req.user._id)
        const o = 86400000;
        const requestTime=time.signIntTime()
        const timeArr = [requestTime - o, requestTime - 3 * o, requestTime - 7 * o, requestTime - 15 * o, requestTime - 30 * o, requestTime - 60 * o];

        console.log(timeArr)
        try {
            const list =await bookService.getReviewList(req.user._id,timeArr)
            res.respond({
                message: '查询成功',
                data: list
            })
        }catch (e) {
            res.respond({
                message: '查询失败',
                data: {}
            }, 403)
        }
    }
}
