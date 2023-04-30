const userService = require('../services/userService_example')
const axios=require('axios')
module.exports = {
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
            const {src,word} = req.query;
            if (src==='baicizhan'){
                //baicizhan

                axios({
                    timeout: 15000,
                    url: `https://cdn.jsdelivr.net/gh/lyc8503/baicizhan-word-meaning-API/data/words/${word}.json`
                }).then(({data})=>{
                    res.respond({
                        message: '查询成功',
                        data
                    })
                    // console.log(data)
                }).catch(()=>{
                    res.respond({
                        message: '查询失败',
                        data: null
                    }, 403)
                })
            }else{
                //youdao 'http://dict.youdao.com/suggest?q=' + word + '&num=1&doctype=json'

                axios({
                    timeout: 5000,
                    url:'http://dict.youdao.com/suggest?q=' + word + '&num=1&doctype=json'
                }).then(({data:{data}})=>{
                    res.respond({
                        message: '查询成功',
                        data
                    })
                }).catch(()=>{
                    res.respond({
                        message: '查询失败',
                        data: null
                    }, 403)
                })

            }



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

    },
}
