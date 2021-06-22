class Kot {
    imie = null;
    wiek = null;
    czyNajedzony = false;
    zabawki = [];
    rodzeństwo = [];
    lezanka = legowisko.cena;

    constructor(imie, wiek){
        this.imie = imie;
        this.wiek = wiek;
    }

    nakarmKota(){
        this.czyNajedzony = true;
        console.log(this.imie + ' nakarmiony');
    }

    ustawWiek(number){
        console.log("Stary wiek kota: " + this.wiek + " Nowy wiek kota: " + number);
        this.wiek = number;
    }

    pobierzImie(){
       return "Aktualne imie kota: " + this.imie;
    }

    dodajZabawkę(zabawka1, zabawka2, zabawka3){
        this.zabawki.push(zabawka1);
        this.zabawki.push(zabawka2);
        this.zabawki.push(zabawka3);

    }

    pobierzZabawki(){
        return this.zabawki;
    }

    wydrukujPierwszeZabawki(){
        console.log(this.zabawki.slice(0,3));
    }

    dodajKotaDoRodzenstwa(nowyKot){
        this.rodzeństwo.push(nowyKot);
    }

    pobierzGlodneRodzenstwo(){
        return this.rodzeństwo.filter(this.czyGlodny);
    }

    czyGlodny(kot){
        return kot.czyNajedzony === false
    }

    pobierzCeneLegowiska(){
        return this.legowisko;
    }

}

class legowisko{
    cena = 0;
}

let burek = new Kot();
burek.imie = 'burek';
burek.wiek = 3;
burek.czyNajedzony = true;
burek.legowisko = 300;
burek.nakarmKota();
burek.ustawWiek(5);
console.log(burek.pobierzImie());
console.log(burek.wiek);
console.log(burek.pobierzCeneLegowiska());

let kicia = new Kot();
kicia.imie = 'kicia';
kicia.wiek = 2;
czyNajedzony = false;
kicia.nakarmKota();
kicia.dodajZabawkę('butelka', 'piłka', 'kółko');
kicia.pobierzZabawki();
kicia.wydrukujPierwszeZabawki();


let rufus = new Kot();
rufus.imie = 'rufus';
rufus.wiek = 2;
rufus.czyNajedzony = false;
rufus.nakarmKota();


let filemon = new Kot ("Filemon", 3);
filemon.czyNajedzony = true;
filemon.nakarmKota();

let Pimpek = new Kot ("Pimpek");
Pimpek.czyNajedzony = false;

let Dyzio = new Kot ("Dyzio");
Dyzio.czyNajedzony = true;

burek.dodajKotaDoRodzenstwa(Pimpek);
burek.dodajKotaDoRodzenstwa(Dyzio);

console.log(burek.pobierzGlodneRodzenstwo());


