let triBase = document.getElementById('triBase');
let triHeight = document.getElementById('triHeight');
let triResult = document.getElementById('triResult');
let triBtn = document.getElementById('triBtn');
let resultList = document.getElementById('resultList');

triBtn.addEventListener('click', function () {
    let values = getFloat(triBase, triHeight);
    let calc = 0.5 * values[0] * values[1];

    triResult.innerText = calc;
    let inner = 'triShow';
    let outer = 'triTemp';
    areaShow(inner, outer);
})


let recBase = document.getElementById('recBase');
let recHeight = document.getElementById('recHeight');
let recResult = document.getElementById('recResult');
let recBtn = document.getElementById('recBtn');

recBtn.addEventListener('click', function () {
    let values = getFloat(recBase, recHeight);
    let calc = values[0] * values[1];

    recResult.innerText = calc;
    let inner = 'recShow';
    let outer = 'recTemp';
    areaShow(inner, outer);
})

let parBase = document.getElementById('parBase');
let parHeight = document.getElementById('parHeight');
let parResult = document.getElementById('parResult');
let parBtn = document.getElementById('parBtn');

parBtn.addEventListener('click', function () {
    let values = getFloat(parBase, parHeight);
    let calc = values[0] * values[1];

    parResult.innerText = calc;
    let inner = 'parShow';
    let outer = 'parTemp';
    areaShow(inner, outer);
})

let romBase = document.getElementById('romBase');
let romHeight = document.getElementById('romHeight');
let romResult = document.getElementById('romResult');
let romBtn = document.getElementById('romBtn');

romBtn.addEventListener('click', function () {
    let values = getFloat(romBase, romHeight);
    let calc = 0.5 * values[0] * values[1];

    romResult.innerText = calc;
    let inner = 'romShow';
    let outer = 'romTemp';
    areaShow(inner, outer);
})


let penBase = document.getElementById('penBase');
let penHeight = document.getElementById('penHeight');
let penResult = document.getElementById('penResult');
let penBtn = document.getElementById('penBtn');

penBtn.addEventListener('click', function () {
    let values = getFloat(penBase, penHeight);
    let calc = 0.5 * values[0] * values[1];

    penResult.innerText = calc;
    let inner = 'penShow';
    let outer = 'penTemp';
    areaShow(inner, outer);
})

let eliBase = document.getElementById('eliBase');
let eliHeight = document.getElementById('eliHeight');
let eliResult = document.getElementById('eliResult');
let eliBtn = document.getElementById('eliBtn');

eliBtn.addEventListener('click', function () {
    let values = getFloat(eliBase, eliHeight);
    let calc = 3.1416 * values[0] * values[1];

    eliResult.innerText = calc;
    let inner = 'eliShow';
    let outer = 'eliTemp';
    areaShow(inner, outer);
})


function getFloat(a, b) {
    let value1 = a.value;
    let value2 = b.value;
    let value1Float = parseFloat(value1);
    let value2Float = parseFloat(value2);
    let values = [];
    values.push(value1Float);
    values.push(value2Float);
    return values;
}

function areaShow(a, b) {
    let li = document.createElement('li');
    li.innerText = document.getElementById(a).innerText;
    li.classList.add(b);
    let c = '.' + b;
    let remove = resultList.querySelectorAll(c);
    remove.forEach(i => {
        i.remove();
    });
    resultList.appendChild(li);
}


let bgColor = document.querySelectorAll('.bgColor');

for( let bg of bgColor){
    bg.addEventListener('mousemove', function () {
        this.style.backgroundColor = '#fff1ff';
    })
}

for( let bg of bgColor){
    bg.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'white';
    })
}



document.getElementById('reset').addEventListener('click', function () {

})