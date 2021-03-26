let calc = document.querySelector('.input')
let history = document.querySelector('.result')
let i = 0
let arr = []


// function addNum(num) {
//      if(num) {
//         calc.value = calc.value + num
//     }

// }

function addNum(num) {
     if(num === '.') {
        calc.value =  + calc.value + num
    }else if(num === '0'){
        calc.value = '' + calc.value + num
    }else{
        calc.value =  calc.value + num
    }

}

function operation(name) {
    if (name === 'sqrt') {
        calc.value = "\u221A" + calc.value + "" + "=" + Math.sqrt(eval(calc.value))

    } else if (name === 'pow') {
        calc.value = calc.value + "" + "=" + Math.pow(eval(calc.value), 2)

    }

    let sum = calc.value
    if (i < 10) {
        arr[i] = sum
    } else {
        i = 0
        arr[i] = sum

    }
    localStorage.setItem(`${i}`, arr[i]);
    history.innerHTML += arr[i] + '<br/>'
    i++
    console.log(arr)
}

function remove() {
    calc.value = '';
}

function backNum() {
    let back = calc.value;
    calc.value = back.substring(0, back.length - 1);
}

function sum() {
    let num = calc.value
    if (eval(calc.value) === undefined) {
        calc.value = '0'
    } else if (eval(calc.value) === Infinity) {
        calc.value = 'тебя на ноль поделить ?'
    }
    calc.value = eval(calc.value)
    let sum = `${num} = ${eval(calc.value)}`

    if (i < 10) {
        arr[i] = sum
    } else {
        i = 0
        arr[i] = sum

    }
    localStorage.setItem(`${i}`, arr[i]);
    history.innerHTML += arr[i] + '<br/>'
    i++
    console.log(arr)
}

function getStorage() {
    for (i = 0; i < localStorage.length; i++) {
        let localSave = localStorage.getItem(`${i}`)
        history.innerHTML += localSave + '<br/>'

    }
}
getStorage()

