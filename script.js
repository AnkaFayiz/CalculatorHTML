// Clear display box
function clearScreen() {
    document.getElementById("result").value = "";
}

// Display number 
function display(value){
    document.getElementById("result").value += value;
}

// To evaluate Expression and return result
function calculate() {
    var x = document.getElementById("result").value;
    var q = eval(x);

    // Return result
    document.getElementById("result").value = q;
}