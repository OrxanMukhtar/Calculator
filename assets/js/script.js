



let inputNum = ``


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
    let equ_1 = eval(inputNum)
    // inputNum = ''
    document.getElementById('h1').innerHTML = equ_1
    document.getElementById('h3').innerHTML = inputNum
    document.getElementById('h5').innerHTML = '='
}


function clear1() {
    inputNum = ""
    document.getElementById("h5").innerHTML = ''
    document.getElementById("h1").innerHTML = inputNum

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












