var personModule = {};

personModule.name;
personModule.age;

personModule.setName = function(name){
        personModule.setName = name;
};

personModule.setAge = function(age){
        personModule.setAge = age;
};

function getInfo(){
    return personModule.name + " " + personModule.age;
};

return personModule;

var laura = new personModule()
person = personModule.setAge(22); 
personModule.setName("Laura");

console.log(laura);