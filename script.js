function myFunction() {

    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var plus = document.getElementById("plus").checked;
    var minus = document.getElementById("minus").checked;
    var times = document.getElementById("times").checked;
    var dividedBy = document.getElementById("dividedBy").checked;

    if(plus === true) {
        if(x != '' && y != '') {
            document.getElementById("result").innerHTML = parseInt(x) + parseInt(y);
        } else {
            document.getElementById("result").innerHTML = 'Some entry value is empty!';
        }
        console.log('Plus');
    }

    else if(minus === true) {
        if(x != '' && y != '') {
            document.getElementById("result").innerHTML = parseInt(x) - parseInt(y);
        } else {
            document.getElementById("result").innerHTML = 'Some entry value is empty!';
        }
        console.log('Minus');
    }

    else if(times === true) {
        if(x != '' && y != '') {
            document.getElementById("result").innerHTML = parseInt(x) * parseInt(y);
        } else {
            document.getElementById("result").innerHTML = 'Some entry value is empty!';
        }
        console.log('Times');
    }

    else if(dividedBy === true) {
        if(x != '' && y != '') {
            document.getElementById("result").innerHTML = parseInt(x) / parseInt(y);
        } else {
            document.getElementById("result").innerHTML = 'Some entry value is empty!';
        }
        console.log('Divided By');
    }
    else {
        document.getElementById("result").innerHTML = 'Empty!';
    }

    document.getElementById("num1").innerHTML = x;
    document.getElementById("num2").innerHTML = y;
}

function clearEverthing() {
    document.getElementById("firstNumber").value = '';
    document.getElementById("secondNumber").value = '';
    setTimeout(() => {
        document.getElementById("firstNumber").focus();
    }, 100);
    window.console.log('clear');
}