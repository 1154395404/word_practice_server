const {nanoid} = require("nanoid");
module.exports = {
    getRandomInteger (min, max) {
        // return Math.floor(Math.random() * (max + 1)) + min
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    parse(data){
        return JSON.parse(JSON.stringify(data))
    },
    parseWordStr(str){
        let wordArr = str.split('\n').map((item) => {
            return {id: nanoid(), word: item.trim()}
        })
        return wordArr.filter(item => item.word !== '')
    }




}

