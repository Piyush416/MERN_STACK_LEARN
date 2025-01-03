// use aggregate database and items inside collections


// $match -> match the condition
// if want to get greater then 30 quantity with aggregate
// db.items.aggregate([ { (condition)$match : {(field_name)quantity : {(greater than)$gt: 30}}} ])
db.items.aggregate([{$match : {quantity : {$gt : 30}}}])



// multiply condition
// find out element which have quantity greater than 30 
// or uusme se price greater than 76 
// 2ndObject  1stObject ke output me se findout karega na ki pureme se remember that 
// db.item.aggreate(array[object1{}, object2{}])
db.items.aggregate([ {$match : {quantity : {$gt: 30}}} , {$match : {price: {$gt : 76}}}])


//task
// find those item price > 60 and sort then accor. to quantity lowest the highest and updatedPrice = price*0.25
db.items.aggregate([ 
    {$match : {price:{$gt: 60}}}, 
    {$sort: {quantity: 1}}, 
    {$project : {_id : 0, name : 1, quantity: 1, updPrice : {$multiply: ["$price",0.25]}}}
])