// Q60    20/06/2024
//Question 60: Self-Running User Profile: Create a quick, 
// self-setup profile for a user that can tell you the user's name and age.
// Explain & TIP: This is like a self-building lego set.
// Once you start it, it builds a user profile by itself and can tell you about the user.
var userProfile = (function () {
    var name = "Annu";
    var age = "30";
    return {
        displayInfo: function () {
            console.log("Username: ".concat(name, " , Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
