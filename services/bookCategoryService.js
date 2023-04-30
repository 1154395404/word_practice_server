const bookCategory = require('../model/bookcategorySchema')
module.exports = {
    insert(doc) {
        return new bookCategory(doc).save()
    },
    update(_id, doc) {
        return bookCategory.updateOne({_id}, doc)
    },
    delete(_id){
        return bookCategory.deleteOne({_id})
    },
    async query(page, size, search) {
        let data = []
        try {
            const reg = new RegExp(search, 'i');
            const count = await bookCategory.count({
                $or: [ //多条件，数组
                    {name: {$regex: reg}},
                ]
            });
            const list = await bookCategory.find(
                {
                    $or: [ //多条件，数组
                        {name: {$regex: reg}}]
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
    }
}
