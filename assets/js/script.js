let inputNum = ``

document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    num(key);
  } else if(key == "-" ){
    num(key)
  } else if(key == "+"){
    num(key)
  } else if(key == "*") {
    num(key)
  } else if(key == "/") {
    num(key)
  } else if(key == ".") {
    num(key)
  } else if(key == "%") {
    persent()
  } else if(key == "Enter") {
    equal()
  } else if(key == "Delete") {
    clear1()
    document.getElementById('h3').innerHTML = ""
  } else if (key === 'Backspace') {
    backspaceKey();
  }
});

function num(value) {
  inputNum += value;
}

function num(value) {
    inputNum += value
    document.getElementById('h1').innerHTML = inputNum
}

function element(value) {
    inputNum += value
    document.getElementById('h1').innerHTML = inputNum
    document.getElementById('h5').innerHTML = value
}

function equal() {

    if(inputNum === "6335557") {
        inputNum = "&#128640"
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "100") {
        inputNum = "&#128169"
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "200") {
        inputNum = "&#10084"
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "300") {
        inputNum = "&#10084"
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "400") {
        inputNum = '&#10084'
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "500") {
        inputNum = '&#128176'
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "911") {
        window.location.href = "galery.html"
    }
    else {
        let equ_1 = eval(inputNum)
        document.getElementById('h1').innerHTML = equ_1
        document.getElementById('h3').innerHTML = inputNum
        document.getElementById('h5').innerHTML = '='
        document.getElementById('main_body').style.borderColor = "coral"
    }
}

function clear1() {
    inputNum = ""
    document.getElementById("h5").innerHTML = ''
    document.getElementById("h1").innerHTML = inputNum
    document.getElementById('h3').innerHTML = ""
    document.getElementById('main_body').style.borderColor = "#fff"
}

function persent() {
    perNum = inputNum.split("*")
    inputNum = perNum[0]*perNum[1] / 100

    document.getElementById("h1").innerHTML = inputNum
    document.getElementById("h5").innerHTML = "%"

    inputNum = ''
}

function minus_plus() {
    inputNum = eval(inputNum)*-1
    document.getElementById("h1").innerHTML = inputNum
}

function backspaceKey() {
    inputNum = inputNum.slice(0, -1);
    document.getElementById("h1").innerHTML = inputNum
}