const jwt = require('../utils/jwt')
// const whiteList = ['/api/user/login', '/api/user/register']
const whiteListKeyWord = ['login', 'register']
function isWhiteList(url) {
   return  whiteListKeyWord.some((key)=>url.includes(key))


}
module.exports = (req, res, next) => {
    if (isWhiteList(req.url)) {
        next()
    } else {
        const token = req.headers.authorization?.split(' ')[1]
        const user = jwt.verify(token)
        if (user) {
            req.user = user
            next()
        } else {
            res.status(401).send({
                message: 'token 校验失败',
                status: 0
            })
        }
    }
}
