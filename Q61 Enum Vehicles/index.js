//Q61   210-/06/2024
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks,
// and motorcycles using enums,and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize things.
// They make your code cleaner and easier to understand.
var Vehicle;
(function (Vehicle) {
    Vehicle["Car"] = "Cars";
    Vehicle["Truck"] = "Trucks";
    Vehicle["motorcycles"] = "Motorcycles";
})(Vehicle || (Vehicle = {}));
console.log(Vehicle.motorcycles);
