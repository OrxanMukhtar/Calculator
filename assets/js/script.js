

// let num_1 = ''
// let num_2 = ''
// let num_3 = ''


// let inputValue = ``
// let equalValue = ``

// function one() {
//     inputValue += 1;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function two() {
//     inputValue += 2;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function three() {
//     inputValue += 3;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function four() {
//     inputValue += 4;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function five() {
//     inputValue += 5;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function six() {
//     inputValue += 6;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function seven() {
//     inputValue += 7;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function eight() {
//     inputValue += 8;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function nine() {
//     inputValue += 9;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    
// function zero() {
//     inputValue += 0;
//     document.getElementById("main_input_h1").innerHTML = inputValue
// }    


// function clear1() {
//     inputValue = ''
//     document.getElementById("main_input_h1").innerHTML = inputValue;
// }


// function minus_plus() {
//     inputValue = inputValue*-1
//     document.getElementById("main_input_h1").innerHTML = inputValue;
// }


// function minus() {
//     let minusValu = "-"
//     console.log(minusValu)
//     inputValue += (' - ')
//     document.getElementById("main_input_h1").innerHTML = inputValue;
// }


// function equal() {
//     equalValue = inputValue[0] + minusValu + inputValue[1]
//     console.log('equal')
// }





// console.log(equalValue)



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
    inputNum = ''
    document.getElementById('h3').innerHTML = equ_1
    document.getElementById('h5').innerHTML = '='
}


function clear1() {
    inputNum = ""
    document.getElementById("h5").innerHTML = ''
    document.getElementById("h1").innerHTML = inputNum
}














