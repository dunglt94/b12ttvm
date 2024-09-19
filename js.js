let elementList = [];
let newE = document.getElementById('addElement');
let list = document.getElementById('list');
function addToList() {
    let element = +newE.value;
    elementList.push(element);
    newE.focus();
    newE.value = '';
}
function showList() {
    list.innerText = '';
    for (let i = 0; i < elementList.length; i++) {
        list.innerHTML += `Element ${i} = ${elementList[i]} <br>`;
    }
}