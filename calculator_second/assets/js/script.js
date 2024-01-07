let numbers = ''

let equaly = ``

function btn(index) {
    numbers += index

    document.getElementById("input").innerHTML = numbers
    // console.log(numbers)
}

function elements(index) {
    numbers += index

    document.getElementById("input").innerHTML = numbers
}

function ac(){
    numbers = ' '
    
    document.getElementById("input").innerHTML = numbers
}

function equal() {
    equaly = eval(numbers)
    
    document.getElementById("input").innerHTML = equaly
    numbers = ''
}

function persent() {

    perNum = numbers.split("*")

    numbers = perNum[0]*perNum[1] / 100


    document.getElementById("input").innerHTML = numbers


    numbers = ''

}

function negative() {
    numbers = eval(numbers)*-1

    document.getElementById("input").innerHTML = numbers

}