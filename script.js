var generateBtn = document.getElementById("generate")

//create array for each character type
numArray = ["1", "2", "3", "4", "5", "6", "7","8","9","10","11","12","13","14","15","17","18","19","20", "21", "23", "24", "25", "26", "27", "28", "29", "30"];
specialArray = ["!", "@", "#","&","?","/"];
lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", 'P', "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getPasswordOptions() {
    var length = parseInt(prompt("how long?"));
    console.log(length);
    if (isNaN(length) === true) {
        alert("must be a numnber");
        return;
    }
    if (length < 8) {
        alert("greater than 8");
        return;

    }
    if (length > 128) {
        alert("less than 128");
        return;

    }

    var hasNum = confirm("has numbers?");
    var hasUpper = confirm("hasUpper");
    var hasLower = confirm("haslower");
    var hasSpecial = confirm("hasSpecial");

    if (hasNum === false && hasUpper === false && hasLower === false && hasSpecial === false) {
        alert("at least one type");
        return;
    }

    var passwordOptions = {
        length,
        hasNum,
        hasSpecial,
        hasLower,
        hasUpper
    }
    return passwordOptions;
}

function generatePassword() {
    var superArray = [];
    var result = [];
    var options = getPasswordOptions();

    if (options.hasLower === true) {
        superArray = superArray.concat(lowerArray)
        console.log(superArray);

    }
    if (options.hasUpper === true) {
        superArray = superArray.concat(upperArray);
        console.log(superArray)
    }

    if (options.hasNum === true) {
        superArray = superArray.concat(numArray);
        console.log(superArray)
    }

    if (options.hasSpecial === true) {
        superArray = superArray.concat(specialArray)
        console.log(superArray)
    }
    for (var i = 0; i < options.length; i++) {
        var index = Math.floor(Math.random() * superArray.length);
        var digit = superArray[index];
        result.push(digit);
    }
    console.log(result);

    return result.join("")
}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    // return password;

}
generateBtn.addEventListener("click", writePassword);

// copyBtn.addEventListener("click", function(){
//     localStorage.setItem("password", password)
// })