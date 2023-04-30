const Book = require('../model/bookSchema')
module.exports = {
    insert(doc) {
        return new Book(doc).save()
    },
    update(_id, doc) {
        return Book.updateOne({_id}, doc)
    },
    delete(_id) {
        return Book.deleteOne({_id})
    },
    async query(page, size, search) {
        let data = []
        try {
            const reg = new RegExp(search, 'i');
            const count = await Book.count({
                $or: [ //多条件，数组
                    {name: {$regex: reg}},
                    {categoryId: {$regex: reg}},
                ],
                "categoryId": {$ne: '-1'}
            });
            const list = await Book.find(
                {
                    $or: [ //多条件，数组
                        {name: {$regex: reg}},
                        {categoryId: {$regex: reg}},
                    ],
                    "categoryId": {$ne: '-1'}
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
    async query_c(page, size, search) {
        // "categoryId":{$ne:'-1'}
        let data = []
        try {
            const reg = new RegExp(search, 'i');
            const count = await Book.count({
                $or: [ //多条件，数组
                    {name: {$regex: reg}},
                    {_id: {$regex: reg}},
                    {categoryId: {$regex: reg}},
                ],

            });
            const list = await Book.find(
                {
                    $or: [ //多条件，数组
                        {name: {$regex: reg}},
                        {_id: {$regex: reg}},
                        {categoryId: {$regex: reg}},
                    ],

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
    },async query_my_book(userId,page, size, search) {
        // "categoryId":{$ne:'-1'}
        let data = []
        try {
            const reg = new RegExp(search, 'i');
            const count = await Book.count({
                userId,
                $or: [ //多条件，数组
                    {name: {$regex: reg}},
                    {desc: {$regex: reg}},
                    {word: {$regex: reg}},

                ],

            });
            const list = await Book.find(
                {
                    userId,
                    $or: [ //多条件，数组
                        {name: {$regex: reg}},
                        {desc: {$regex: reg}},
                        {word: {$regex: reg}},
                    ],

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
    viewTodayAddList(userId, createDate) {
        return Book.find({
            timeSign: createDate,
            userId

        })

    },
    getDataById(_id) {
        return Book.findOne({_id})
    }
    ,
    getReviewList(userId, timeArr) {
        return Book.find(
            {
                userId,
                timeSign: {
                    $in: timeArr
                }

            }
        )
    },
}
