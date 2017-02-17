function Person(fn, ln, a) 
{
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
}

var p1 = new Person("Laura", "Hartig", 1);

var getInfo = function (Person) 
{
    for (var property in p1) 
    {
        console.log(property);
    }
}

getInfo(p1);