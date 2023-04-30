module.exports = {
    createTime(){
        return new Date()
    },
    signIntTime(dt=0){
        const date=new Date()
        const yyyy=date.getFullYear()
        const mm=date.getMonth()+1
        const dd=date.getDate()
        const currentDateTime=new Date(`${yyyy}-${mm}-${dd}`).getTime()
        // return new Date()
        return currentDateTime+(dt*24*60*60*1000)
    }

}


