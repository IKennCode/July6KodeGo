class Vehicle{
    constructor(color){
        console.log('This is a vehicle class with a color' + color);
    }

    displayType() {
        console.log('This is a method inside a class')
    }
}
var car = new Vehicle();
car.displayType();// calling method

class Honda extends Vehicle{

}

var car2 = new Honda('red');

