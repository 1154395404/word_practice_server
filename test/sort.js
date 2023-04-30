const list=[111,2222,333,444,666,888,999]

function sort(originIndex,targetIndex) {
   const res= list.splice(originIndex,1)
    list.splice(targetIndex,0,...res)
}
sort(6,0)
console.log(list)
