// 01/05/2024    Exercise 45
//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function Store_Car_Info(Manufacturer, Model, Year) {
    var ExtraOption = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        ExtraOption[_i - 3] = arguments[_i];
    }
    var Car_Info = __assign({ Manufacturer: Manufacturer, Model: Model, Year: Year }, Object.assign.apply(Object, __spreadArray([{}], ExtraOption, false)));
    return Car_Info;
}
var Output_Car_Info = Store_Car_Info('Honda', 'City', 2009, { colour: 'Grey' }, { Features: ['Automatic', 'Power stearting', 'Mint Condition'] });
console.log(Output_Car_Info);
