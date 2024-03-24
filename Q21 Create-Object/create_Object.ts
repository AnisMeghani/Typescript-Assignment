//03-03-2024 Exercise 21
//They think of something you could store in a TypeScript Object.
//Write a program that creates Objects containing these items.

//objects k answers strict kye ha 
interface car {
    CarName :string
    Model :number ,
    Colour :string ,
    Price :number ,
    Touchups :number ,
    Automatic :boolean
}
//object create
let car = {
    CarName :'Kia Sportage' ,
    Model :2024 ,
    Colour :'White' , 
    Price :7500000 ,
    Touchups :'3' , 
    Automatic :true
}
//print car object
console.log(car)

//data type set for Person object.
interface Person {
    Name :string ,
    Age :number ,
    Qualification :string ,
    Married :boolean ,
    Address :string ,
}
//Create Person Object
let Person = {
    Name : 'Muhammad Anis Meghani', 
    Age : 36 ,
    Qualification : 'B.Com' ,
    Married : true ,
    Address : 'City Towers and Shopping Mall'
}
//Print Person object detail.
console.log(Person)