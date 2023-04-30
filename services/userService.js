const User = require('../model/userSchema')
module.exports = {
    addUser(doc) {
        return new User(doc).save()
    },
    async getList(page, size, search) {
        let data = []
        try {
            const reg = new RegExp(search, 'i');
            const count = await User.count({
                $or: [ //多条件，数组
                    {name: {$regex: reg}},
                    {school: {$regex: reg}},
                    {signature: {$regex: reg}},
                ]
            });
            const list = await User.find(
                {
                    $or: [ //多条件，数组
                        {name: {$regex: reg}},
                        {school: {$regex: reg}},
                        {signature: {$regex: reg}},]

                }
            ).skip(size * page).limit(size)
            data = {
                count,
                list
            }
        } catch (e) {
            data = {
                count: 0,
                list: [],
            }
        }
        return data;
    },

    login(email, password) {
        return User.findOne({email, password}, {
            password: 0
        })
    },
    update(_id, doc) {
        return User.updateOne({_id}, doc)
    },
    delete(_id) {
        return User.deleteOne({_id})
    },
    getAllUsers(page, size) {
        // return User.find(['name','email'])
        return User.find({}, {name: 1, email: 1}).skip(page * size).limit(size)
    },
    getUserById(_id) {
        // return User.find(['name','email'])
        return User.findOne({_id}, {password: 0})
    },
    getUsersCount() {
        return User.count()
    },
    updateUser(_id, name, email) {
        return User.updateOne({_id}, {name, email})
    },
    deleteUser(_id) {
        return User.deleteOne({_id})
    }
}
