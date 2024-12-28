let originalArray = [10,20,30,40];


// can not return array iterator on original array 
// iterator on original array
// arr.forEach(i => {
//    console.log(i) 
// });


// map,filter,reduce 

// map() creates a new array from calling a function for every array element.
// map will create a new array according to given operation
// map some as foreach loop
let mappedArray = originalArray.map((i)=>
    {
        return i*10
    })
console.log(originalArray)
console.log(mappedArray)


// filter -> if condition is true then store it 

let filterArray = originalArray.filter((i)=>
    {
        return i < 30
    })

console.log(filterArray)



// reduce is use to do done work it sum of all the element

// syntax
// originalArray.reduce((accumulator, currentValue)=>{},initialValue)

// reduce array will give only single value not array
let reduceArray = originalArray.reduce((acc,curr)=>{
    return acc+curr;
},0)

console.log(reduceArray)



// chaining 
// in foreach loop we can not do chaining 
// map filter and reduce we can use chaining

// example
// arr.forEach(()=>{}).forEach(()=>{}) // this can be work this is chaining


// arr.map().filter().reduce() // here i can use chaining technique
let chainingArray = originalArray.map((i)=>
    {
        return i*10
    }).filter((i)=>
        {
            return i>200
        }).reduce((acc,curr)=>
            {
                return acc+curr
            },0)

console.log(chainingArray)




// Question
let qarr = [2,1,3,0,1,12,14,8,7,6]

let x = Math.floor((Math.random() * 10) + 5);

console.log("random Value: ",x)
let modifiedArray = qarr.map((i)=>
    {
        return i*i
    }).filter((i)=>
        {
            return i>x
        }).reduce((acc,curr)=>
            {
                return acc*curr
            },1)
console.log("ModifiedArray: "+modifiedArray)