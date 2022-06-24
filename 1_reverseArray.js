//reverse the array

function reverse(arr,start,stop){ 
    if(start>=stop){ //point where the index will meet (4 no more swapping required)
        console.log(arr)
        return arr  //first return will return to parent function
    }
    else{
        return arr //this will return to its parent function till it reaches x (5 return to x)
    }
    temp=arr[start] //taking start element in temp    (2 swaps)
    arr[start]=arr[stop] //swapping start stop
    arr[stop]=temp //putting temp at last place
    reverse(arr,start+1,stop-1) // (3 recursive function) increasing start index by 1 and decreasing last index by -1 
}
arr=[1,2,3,4,5,6]
let x=reverse(arr,0,arr.length) //initial start and stop values  (1 initial call)
console.log(x)