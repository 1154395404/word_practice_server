function step1(arr) {
    if (arr.length === 0)
        return 4
    const mid = Math.floor(arr.length / 2)
    let count = 0;
    for (let i = mid - 2; i < mid + 2 + arr.length % 2; i++) {
        // console.log(i)
        count += isUndefined(arr[i])
    }
    return count

}

function isUndefined(e) {
    if (e === undefined)
        return 0
    else
        return e
}


function step2(num) {
    const arr = []
    for (let i = 1; i < num / i; i++) {
        if (num % i === 0) {
            arr.push(i)
            if (num % i !== i) {
                arr.push(num / i)
            }
        }
    }
    arr.sort((a,b)=>a-b)
    if (arr.length>=2){
        return arr.slice(0,2)
    }else {
        return  arr
    }

}


function step3(arr) {
    // {
    //     origin: 1,
    //     sign: 1,
    // }
    const a=[]
    arr.forEach((n,index)=>{
        a.push({
            origin:n,
            sign:index+1
        })
    })
    a.sort((a,b)=>b.origin-a.origin)
    a.forEach((o)=>{
    })
    console.log(a)

}

console.log(step3([4,2,3,1]))

//-------------------2-------------------------

// function step1(arr) {
//     arr.sort((a, b) => a - b)
//     const time = [-1, -1]
//     let set = new Set()
//     arr.forEach((num) => {
//         time[0] = num
//         time[1] = num + 1
//         // time[2]=num+2
//         set = new Set([...time, ...set])
//     })
//     return set.size
// }
//
//
// function step2(n) {
//     if (n < 1)
//         return 1
//     if (n > 1000)
//         return 1000
//     /**
//      * 1 n
//      * 2 n+10
//      * 3 n+20
//      * 4 n+30
//      * 5 n+40
//      *
//      * */
//     // let sum=0
//     // let currentSum=n
//     // for (let i = 1; i < 4; i++) {
//     //     sum+=currentSum+i*10
//     //     currentSum=currentSum+i*10
//     // }
//     return n + 40
//
// }
//
// function step3(num) {
//     const arr = []
//     for (let i = 1; i < num / i; i++) {
//         if (num % i === 0) {
//             arr.push(i)
//             if (num % i !== i) {
//                 arr.push(num / i)
//             }
//         }
//     }
//     if (arr.length>5){
//         arr.sort((a,b)=>b-a)
//         return arr.slice(0,5)
//     }else {
//         arr.sort((a,b)=>a-b)
//         return  arr
//     }
//
// }
//
// console.log(step3(72))

//-------------------3-------------------------
//
// function step1(arr) {
//     if (arr.length===0)
//         return []
//     const stack=[]
//     for (let i = 0; i < 7; i++) {
//         // console.log(i)
//         if (arr[i]!==undefined)
//             stack.push(arr[i])
//     }
//     stack.pop()
//     return  stack
// }
//
// function step2(arr) {
//     arr.sort((a,b)=>a-b)
//     const array=[]
//     arr.forEach((e)=>{
//         array.push(e,e)
//     })
//     return array
// }
//
// function step3(arr) {
//     if (arr.length===0)
//         return 0
//     if (arr.length===1)
//         return arr[1]
//     let i=1;
//     while (true){
//         const currentSign=Math.floor(43/i)
//         // console.log(currentSign)
//         if (arr.length>=currentSign){
//             return arr[currentSign-1]
//         }
//         i++
//
//     }
// }
//
// const a=[]
// for (let i = 1; i <=25 ; i++) {
//     a.push(i)
// }
// console.log(step3(a))
