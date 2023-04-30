const User = require("../model/userSchema");
const Music = require("../model/musicSchema");
const Admin = require("../model/adminSchema");
const userService=require('../services/userService')


const mongoose = require('mongoose');

// Replace YOUR_MONGODB_URI with the connection string for your MongoDB database
const uri = 'mongodb://localhost:27017/Miumiu';
mongoose.set("strictQuery", false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;
connection.once('open', () => {
    test()
    console.log('数据库连接成功~');
});


async function test() {
    for (let i = 0; i < 9; i++) {
         userService.addUser({
            phone: '1769245565' + i,
            password: '123456'
        }).then(()=>{

         }).catch(()=>{

         })
        // const user=  new User({
        //     phone: '1769245565' + i,
        //     password: '123456'
        // })
        // console.log(user)
        // user.save().then( r =>{
        //     console.log(r)
        // },(e)=>{
        //     console.log(e)
        // })

    }
}



// const music=new Admin({username:'wwwww',password:'123456'})
// music.save()
// console.log(music)
