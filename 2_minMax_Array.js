
function minmax(arr){
    let obj={} 
    
    if(arr.length==1){ //if array contains only 1 element min & max is same element
        obj.min=arr[0]
        obj.max=arr[0]
    }
    //basically here we are taking min and max for first two elements of an array
   //higher value is assigned max and lower is assigned minimum
   //ex array=[0,1,2,3] we will only look for 0,1 and assign min=0 and max =1
    if(arr[0]>arr[1]){ 
        obj.max=arr[0]
        obj.min=arr[1]
    }else{
        obj.max=arr[1]
        obj.min=arr[0]
    }
    //then we traverse through array and update our min max with updated values
    for(let i=2 ; i<arr.length;i++){
        if(arr[i]>obj.max){ //if a higher max is found max is replaced
            obj.max=arr[i] 
        }else if(arr[i]<obj.min){ //if a lower max is found min is replaced
            obj.min=arr[i]
        }
    }
    console.log("min element is ", obj.min)
    console.log("max element is ", obj.max)
}
arr=[5,7,60,200,-5]
minmax(arr)