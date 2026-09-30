'use strict'

class Artikal {
    constructor(jedinstvenBroj, naziv, cena, naStanju) {
        this.jedinstvenBroj = jedinstvenBroj;
        this.naziv = naziv;
        this.cena = cena;
        this.naStanju = naStanju;
    }
}

const artikli = [
    new Artikal(101, "Mila čokolada 100g", 120, true),
    new Artikal(102, "Čips Classic 150g", 150, false), 
    new Artikal(103, "Coca Cola 2L", 180, true),
    new Artikal(104, "Plazma keks 300g", 240, false)  
];

const tabela = document.querySelector("#artikli");

for (let artikal of artikli) {
    let tr = document.createElement("tr");

    let tdBroj = document.createElement("td");
    let tdNaziv = document.createElement("td");
    let tdCena = document.createElement("td");
    let tdDostupnost = document.createElement("td");

    tdBroj.textContent = artikal.jedinstvenBroj;
    tdNaziv.textContent = artikal.naziv;
    tdCena.textContent = artikal.cena + " RSD";
    tdDostupnost.textContent = artikal.naStanju ? "Na stanju" : "Nije na stanju";

    if (!artikal.naStanju) {
        tr.style.backgroundColor = "red";
        tr.style.color = "white";
    }

    tr.appendChild(tdBroj);
    tr.appendChild(tdNaziv);
    tr.appendChild(tdCena);
    tr.appendChild(tdDostupnost);

    tabela.appendChild(tr);
}