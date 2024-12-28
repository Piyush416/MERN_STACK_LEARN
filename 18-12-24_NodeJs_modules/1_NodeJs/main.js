const addition = ()=>
    {
        return 2+1;
    }

const multiple = ()=>
    {
        return 21*2;
    }

// module.exports = addition;

// we return  multiple function in the object
// module.exports = {addition,multiple};


// change the function name
module.exports = {
    add : addition,
    multi : multiple
}