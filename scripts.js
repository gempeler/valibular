/********************************* */
// Vokabeln
/********************************* */
var vokabeln = [
    {
        de: "Haus",
        en: "house"
    },
    {
        de: "Katze",
        en: "cat"
    },
    {
        de: "Milch",
        en: "milk"
    },
    {
        de: "Computer",
        en: "computer"
    },
    {
        de: "Hund",
        en: "dog"
    },
    {
        de: "Maus",
        en: "mouse"
    },
    {
        de: "Tisch",
        en: "table"
    },
    {
        de: "Katze",
        en: "cat"
    },
    {
        de: "Hausaufgaben",
        en: "homework"
    }, {
        de: "Schule",
        en: "school"
    }
]

/********************************* */
// DOM Variabeln
/********************************* */

var dom_Deutsches_Wort = document.getElementById("Deutsch");
var dom_eingabe = document.getElementById("eingabe")
var dom_button= document.getElementById("button")
var dom_richtig_oder_falsch= document.getElementById("richtig_oder_falsch")
var dom_richtig=document.getElementById("richtig")
var dom_continue_button=document.getElementById("continue")
var dom_counter=document.getElementById("counter")
var dom_punktzahl=document.getElementById("punktzahl")



/********************************* */
// funktionen
/********************************* */


function shuffle_array(vokabeln)
{
    var currentIndex=vokabeln.length;
    var temporaryValue, randomIndex;

    while(0!==currentIndex){randomIndex=Math.floor(Math.random() * currentIndex);
    currentIndex-=1;
    temporaryValue=vokabeln[currentIndex];
    vokabeln[currentIndex]=vokabeln[randomIndex];
    vokabeln[randomIndex]=temporaryValue;}
    return vokabeln;
}



function mach_zufall_zahl() { return Math.round(Math.random() * 9); }

//console.log(mach_zufall_zahl())

function hole_de_und_en() {
    return vokabeln[counter];
}

function counter_update() {
    dom_counter.innerHTML =(counter+1)+"/"+(vokabeln.length)
    
}



/********************************* */
// Evenhandler
/********************************* */


// Eventhandler für Klick auf Butto ok
dom_button.addEventListener("click", function () {

    // Wert aus Eingabefeld in Variable eingabe schreiben
    var eingabe = dom_eingabe.value; 
    
    //richtig oder falsch HTML Element sichtbar machen
    dom_richtig_oder_falsch.style.display="block";
    
    // Ist die Eingabe richtig?
    if (eingabe === dasWort_en) {
        dom_richtig_oder_falsch.innerHTML = "richtig";
        // dom_continue_button.addEventListener("click", function(){});
        dom_richtig_oder_falsch.classList.add("gruen");
        dom_richtig_oder_falsch.classList.remove("rot");
        punkte++;
        dom_punktzahl.innerHTML="erreichte Punktezahl: "+ punkte

    }
    // Eingabe ist nicht richtig !
    else {
        dom_richtig_oder_falsch.innerHTML = "falsch";
        dom_richtig.innerHTML="richtige Lösung: "+ dasWort_en;
        dom_richtig_oder_falsch.classList.add("rot");
        dom_richtig_oder_falsch.classList.remove("gruen");
        dom_richtig.style.display  = "block";

        ;
    }
})



dom_continue_button.addEventListener("click", function () {
    counter++ ; 
    wortpaar = hole_de_und_en();
    dasWort_de = wortpaar.de;
    dasWort_en = wortpaar.en;
    dom_Deutsches_Wort.innerHTML = dasWort_de;
    dom_richtig_oder_falsch.style.display  = "none";
    dom_richtig.style.display  = "none";

   counter_update() ;
    if(counter===10){alert("training fertig")}
    dom_eingabe.value="" ;
})


var punkte= 0;
dom_punktzahl.innerHTML="erreichte Punktezahl: "+0;
var gemischtes_array = shuffle_array(vokabeln);
var counter = 0;
var wortpaar = hole_de_und_en();
var dasWort_de = wortpaar.de;
var dasWort_en = wortpaar.en;
dom_Deutsches_Wort.innerHTML = dasWort_de;
counter_update() ;
