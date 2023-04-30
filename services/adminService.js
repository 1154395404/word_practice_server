const User = require('../model/adminSchema')
module.exports = {
    addUser(username, password) {
        return new User({username, password}).save()
    },
    getAllUsers(page, size) {
        // return User.find(['name','email'])
        return User.find({}, {username: 1, createDate: 1,_id:1}).skip(page * size).limit(size)
    },
    getUserById(_id) {
        // return User.find(['name','email'])
        return User.findOne({_id}, {name: 1, email: 1})
    },
    login(username, password) {
        // return User.find(['name','email'])
        return User.findOne({username, password}, {
            password: 0
        })
    },
    getUsersCount() {
        return User.count()
    },
    updateUser(_id, doc) {
        return User.updateOne({_id}, doc)
    },
    deleteUser(_id) {
        return User.deleteOne({_id})
    }
}
