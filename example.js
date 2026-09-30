'use strict'

class Artikal {
    constructor(jedinstvenBroj, naziv, cena, naStanju) {
        this.jedinstvenBroj = jedinstvenBroj;
        this.naziv = naziv;
        this.cena = cena;
        this.naStanju = naStanju; // Boolean vrednost (true/false)
    }
}

const artikli = [
    new Artikal(101, "Mila čokolada 100g", 120, true),
    new Artikal(102, "Čips Classic 150g", 150, false), // Nije na stanju -> biće crven
    new Artikal(103, "Coca Cola 2L", 180, true),
    new Artikal(104, "Plazma keks 300g", 240, false)  // Nije na stanju -> biće crven
];
