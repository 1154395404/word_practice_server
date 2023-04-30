// http://127.0.0.1:3535/banner?type=2
const request=require('../utils/request')
const list=[]
request('/banner','get',{
    type:2
}).then(({banners})=>{

    banners.forEach((b)=>{
        list.push(b.pic)
    })
    console.log(list)
})
