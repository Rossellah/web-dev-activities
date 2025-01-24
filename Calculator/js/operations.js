function plus() {
    const display1 = document.getElementById('display1');
    const display2 = document.getElementById('display2');
    document.getElementById('operator').value = "+";

    if (display2.value === "+") {
        document.getElementById('display2').value = display1;
        document.getElementById('display1').value = "0";

    } else {
        display2.value = Number(display1.value) + Number(display2.value);
        document.getElementById('display1').value = "0";

    }
}

function minus() {
    const display1 = document.getElementById('display1');
    const display2 = document.getElementById('display2');
    document.getElementById('operator').value = "-";

    if (display2.value === "-") {
        document.getElementById('display2').value = display1;
        document.getElementById('display1').value = "0";

    } else {
        display2.value = Number(display1.value) - Number(display2.value);
        document.getElementById('display1').value = "0";

    }
}

function times() {
    const display1 = document.getElementById('display1');
    const display2 = document.getElementById('display2');
    document.getElementById('operator').value = "*";

    if (display2.value === "") {
        
        document.getElementById('display2').value = display1.value;
        document.getElementById('display1').value = "0";

    } else {
       
        display2.value = Number(display1.value) * Number(display2.value);
        document.getElementById('display1').value = "0";
    }
}

function div() {
    const display1 = document.getElementById('display1');
    const display2 = document.getElementById('display2');
    document.getElementById('operator').value = "/";

    if (display2.value === "") {
        document.getElementById('display2').value = display1.value;
        document.getElementById('display1').value = "0";
    } else {
        if (Number(display1.value) === 0) {
            document.getElementById('display2').value = "Error";
        } else {
            display2.value = Number(display2.value) / Number(display1.value);
        }
        document.getElementById('display1').value = "0";
    }
}
   
function dot() {
    const display1 = document.getElementById('display1');
    const num = display1.value;

    if (!num.includes(".")) { 
        display1.value = num + "."; 
    }
}
function equals() {
    const display1 = document.getElementById('display1');
    const display2 = document.getElementById('display2');
    const operator = document.getElementById('operator').value;
    let answer;

    if (operator == "+") { 
        answer = Number(display2.value) + Number(display1.value);
    } else if (operator == "-") {
        answer = Number(display2.value) - Number(display1.value);
    } else if (operator == "*") {
        answer = Number(display2.value) * Number(display1.value);
    } else if (operator == "/") {
        if (Number(display1.value) === 0) {
            answer = "Error"; 
        } else {
            answer = Number(display2.value) / Number(display1.value);
        }
    }

    display1.value = answer;
    display2.value = "0";
    document.getElementById('operator').value = "";
}

