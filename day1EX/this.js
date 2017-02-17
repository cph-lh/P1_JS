console.log(this);

var myCar = {
    name: 'fast',
    speed: 100,
    print: function(){
        console.log(this);
    }
};

myCar.print();