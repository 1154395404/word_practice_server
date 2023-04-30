const bookCategoryService = require('../services/bookCategoryService')
const bookService = require('../services/bookService')
module.exports = {
    async insert(req,res) {

        try {
            const user = await bookCategoryService.insert(req.body)
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
            const user = await bookCategoryService.query(page-1,size,search)
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
            const user = await bookCategoryService.update(req.body._id,req.body)
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
            const {count}=await bookService.query(1,10000,req.body._id)
            if (count===0){
                const user = await bookCategoryService.delete(req.body._id)
                res.respond({
                    message: '删除成功',
                    data: user
                })
            }else{
                res.respond({
                    message: '删除失败 请先删除该分类下的单词书',
                    data: null
                }, 403)
            }




        } catch (e) {
            res.respond({
                message: '删除失败',
                data: null
            }, 403)
        }

    }
}
