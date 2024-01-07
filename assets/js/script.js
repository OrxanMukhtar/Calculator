



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

    if(inputNum === "5616183") {

        inputNum = "İdris &#10084"
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "0505616183") {

        inputNum = "&#128169"
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "3009383") {

        inputNum = "Müdir &#10084"
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "6335557") {
        inputNum = "&#128640"
        document.getElementById('h1').innerHTML = inputNum

    } else if(inputNum === "553009383") {
        inputNum = '&#10084'
        document.getElementById('h1').innerHTML = inputNum
    } else if(inputNum === "0553009383") {
        inputNum = '&#128176'
        document.getElementById('h1').innerHTML = inputNum
    }
    else {
        let equ_1 = eval(inputNum)
        // inputNum = ''
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












