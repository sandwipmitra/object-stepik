//1. To create an object, there are two ways - creating a direct object instance and creating a constructor - a separate function that creates and initializes the object.

var person = new Object();
//or

var person = {}; 



//2. To create an object with constructor, we need to describe a function that will create an object and assign values to its properties. The function will look like this:

var person (name, age, year){
  this.name = name;
  this.age = age;
  this.year = year;
}
//console.log(person.age);
//Inside the function, we assign the data passed to the function through the expression 'this' - accessing the current instance of the object.


//3. Creating an instance of an object using our constructor is done as follows:
var employee1 = new Person ("Ivan", "25", "2017");
var employee2 = new Person ("Olga", "21", "2016");
var employee3 = new Person ("Oleg", "32", "2010");


//You can also add properties immediately when creating an object by specifying a list of properties in curly braces:
var person = {
name: "Ivan",
age: 25,
hiredYear: 2017
}
var person = {
  name: 'Piaa',
  age: 28,
  hiredYear: 2024
}
  console.log(person.name);



//Adding a method to an object is done using the following syntax:
var person = {} //Declare object person
person.sayAge = function(n){    //// Declare the sayAge method for the person
  console.log('Piaa is '+ n +' years of old') //Body of the sayAge method - text output
}
person.sayAge(28);
//Adding a method to an object is actually assigning a function to some property of the object. In the previous example, we assigned function (n) to the sayAge property of the person.




//Usually, we need the method not just perform some actions, but use some properties of the object in which it is stored. In order 'to access the object properties' from the method, the 'this' keyword is used. The word 'this' in no way is associated with the object itself, it merely denotes the object that caused this function. In this example, the sayName function will print out the phrase "My name is Piaa":
var person = {
  name:'Piaa',
  age: 28,
  hiredYear: 2014
}
person.sayName = function(){
  console.log('The name of the girl is ' + this.name);
}




/*Now we can examine in more detail the operator that searches through all the properties of the object, just mentioned in the previous module - the 'for .. in' construct.
The command syntax is as follows:
for (key in object), where key is the name of the property, object is the name of the object, and access to the contents of the property is done through the expression object [key].

Let's look at an example, creating an object with method that outputs all the properties of this object to the console:*/
/*var person = {
name: "Ivan",
age: 25,
hiredYear: 2017
}

person.sayAll = function () {
   for (var i in this) {
console.log (i + " is " + this [i]);
   }
}*/


