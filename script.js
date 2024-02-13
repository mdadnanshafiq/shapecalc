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
    let c = '.'+b;
    let remove = resultList.querySelectorAll(c);
    remove.forEach(i => {
        i.remove();
    });
    resultList.appendChild(li);
}


let bgColor = document.getElementById('bgColor');

bgColor.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#fff1ff';
})