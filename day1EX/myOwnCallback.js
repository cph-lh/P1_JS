let names = ["Pink","Dårlig","Warlock","Fluffy","Unicorn"];

function filter(array,callback){
    let arrayToReturn = [];
    array.forEach(function(name){
        let shouldInclude = callback(name);
        if(shouldInclude){
            arrayToReturn.push(name);
        }
    });
    return arrayToReturn;
};

let filternames = filter(names,function(name){
    return name.length >=3;
});