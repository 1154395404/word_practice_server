const Activity = require('../model/activitySchema')
const service={
    insert(doc) {
        return new Activity(doc).save()
    },
    update(type, doc) {
        return Activity.updateOne({type}, doc)
    },
    delete(_id){
        return Activity.deleteOne({_id})
    },
    async relativeMusicDelete(id) {
        const sort = await this.find({type: 1})
        if (sort.data.includes(id)){
            const index=sort.data.findIndex(i=>i===id)
            sort.data.splice(index,1)
            await this.update(1, {data: sort.data})
        }
    },
    async query(page, size, search) {
        let data = []
        try {
            const reg = new RegExp(search, 'i');
            const count = await Activity.count({
                $or: [ //多条件，数组
                    {name: {$regex: reg}},
                    {createDate: {$regex: reg}},
                    {school: {$regex: reg}},
                    {signature: {$regex: reg}},
                ]
            });
            const list = await Activity.find(
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

    find(where){
        return Activity.findOne(where)
    },
    async initBanner() {
        const data = await Activity.findOne({type: 0})
        if (!data) {
            await new Activity({
                data: [
                    'http://p1.music.126.net/y7ZYj-Jep5F2uhcU1hwi2Q==/109951168290121557.jpg',
                    'http://p1.music.126.net/qvQ882JDT3nj-nLfYh2Lbg==/109951168288644507.jpg',
                    'http://p1.music.126.net/VaZqpXsLmTA6WNSSi0Rh8w==/109951168288637495.jpg',
                    'http://p1.music.126.net/W3orlu77zpF1I4EwR_rymQ==/109951168288644918.jpg',
                    'http://p1.music.126.net/mpvDbSd7VmZGpLAqD4wMsg==/109951168289725082.jpg',
                    'http://p1.music.126.net/KuDKHw3MVQoXBI1zdvh8XA==/109951168288660512.jpg',
                    'http://p1.music.126.net/iCrzjJqrp5dy0FE-aRSSkQ==/109951168288651783.jpg',
                    'http://p1.music.126.net/hogojRr2r7WO4-tSATY8ag==/109951168288657837.jpg'
                ]
            }).save()
        }
    },
    async initSort(){
        const data = await Activity.findOne({type: 1})
        if (!data) {
            await new Activity({type:1}).save()

        }
    }
}
service.initBanner()
service.initSort()
module.exports = service

