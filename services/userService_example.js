const User = require('../model/userSchema')
// module.exports = {
//     addUser(name, email, password) {
//         return new User({name, email, password}).save()
//     },
//     getAllUsers(page, size) {
//         // return User.find(['name','email'])
//         return User.find({}, {name: 1, email: 1}).skip(page * size).limit(size)
//     },
//     getUserById(_id) {
//         // return User.find(['name','email'])
//         return User.find({_id}, {name: 1, email: 1})
//     },
//     getUsersCount() {
//         return User.count()
//     },
//     updateUser(_id, name, email) {
//         return User.updateOne({_id}, {name, email})
//     },
//     deleteUser(_id) {
//         return User.deleteOne({_id})
//     }
// }

module.exports = {
    insert(doc) {
        return new User(doc).save()
    },
    update(_id, doc) {
        return User.updateOne({_id}, doc)
    },
    delete(_id){
        return User.deleteOne({_id})
    },
    async query(page, size, search) {
        let data = []
        try {
            const reg = new RegExp(search, 'i');
            const count = await User.count({
                $or: [ //多条件，数组
                    {name: {$regex: reg}},
                    {createDate: {$regex: reg}},
                    {school: {$regex: reg}},
                    {signature: {$regex: reg}},
                ]
            });
            const list = await User.find(
                {
                    $or: [ //多条件，数组
                        {name: {$regex: reg}},
                        {createDate: {$regex: reg}},
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
    addUser(name, email, password) {
        return new User({name, email, password}).save()
    },
    getAllUsers(page, size) {
        // return User.find(['name','email'])
        return User.find({}, {name: 1, email: 1}).skip(page * size).limit(size)
    },
    getUserById(_id) {
        // return User.find(['name','email'])
        // return User.find({_id}, {name: 1, email: 1})
        return User.find({_id})
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
