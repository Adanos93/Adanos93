//Adatok
let users = [
    {oszlop1: "Faszom", oszlop2: "se tudja", oszlop3: 20},
    {oszlop1: "abd", oszlop2: "se tudjasd", oszlop3: 23},
    {oszlop1: "Faszdsgfdom", oszlop2: "se dfstudja", oszlop3: 250},
    {oszlop1: "Faszfdgom", oszlop2: "se dfdtudja", oszlop3: 204},
    {oszlop1: "Fasdsfzom", oszlop2: "se tugdgfddja", oszlop3: 250},
    {oszlop1: "Fagfdgszom", oszlop2: "se tudereja", oszlop3: 207},
    {oszlop1: "Faszsdfom", oszlop2: "se tfgddsfudja", oszlop3: 420},
    {oszlop1: "Fasgfdgzom", oszlop2: "se tudja", oszlop3: 250},
    {oszlop1: "Fasdsfzom", oszlop2: "se tudja", oszlop3: 210},
    {oszlop1: "Faszom", oszlop2: "se tudjgfda", oszlop3: 520},
    {oszlop1: "Fsdfaszom", oszlop2: "se tudja", oszlop3: 720},
    {oszlop1: "Faszomgfd", oszlop2: "se tudja", oszlop3: 520}
];
//Táblázat legenerálása
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
//Gombok
let createButtonGroup = parent => {
    let group = document.createElement("div");

    group.className = "btn-group";
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn btn-info";
    btnInfo.innerHTML = '<i class="fas fa-redo"></i>';
    
    group.className = "btn-group";
    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fas fa-trash"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
};
//Adatok megjelenítése
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
};