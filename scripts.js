
/********************************* *
// Initialize Firebase
/********************************* */

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyBcqccsMRnBJBFWakYuYOlZhb_vZHihIxI",
    authDomain: "valibular.firebaseapp.com",
    databaseURL: "https://valibular.firebaseio.com",
    projectId: "valibular",
    storageBucket: "valibular.appspot.com",
    messagingSenderId: "799254082572"
};
firebase.initializeApp(config);



var ref = firebase.database().ref();


var vokabeln = [];

ref.on("value", function (snapshot) {
    vokabeln = snapshot.val().Unit_1_headway;
    console.log(vokabeln);
    init();
}, function (error) {
    console.log("Error: " + error.code);
});





/********************************* *
// Vokabeln
/********************************* */
/* var vokabeln = [
    {
        de: "Uhr",
        en: "clock"
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
        de: "Genie",
        en: "Vali"
    },
    {
        de: "Hausaufgaben",
        en: "homework"
    }, {
        de: "Schule",
        en: "school"
    }
] */

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
var dom_reload=document.getElementById("reload")


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



function mach_zufall_zahl() { return Math.round(Math.random() * vokabeln.length-1); }

//console.log(mach_zufall_zahl())

function hole_de_und_en() {
    return vokabeln[counter];
}

function counter_update() {
    dom_counter.innerHTML =(counter+1)+"/"+(vokabeln.length)
    
}
function reload_game(){

}




/********************************* */
// Evenhandler
/********************************* */


// Eventhandler für Klick auf Butto ok
dom_button.addEventListener("click", function (){ 
    


    dom_continue_button.style.display="inline"

    // Wert aus Eingabefeld in Variable eingabe schreiben
    var eingabe = dom_eingabe.value; 
    
    //richtig oder falsch HTML Element sichtbar machen
    dom_richtig_oder_falsch.style.display="block";

    dom_button.disabled= true

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
    if(counter===vokabeln.length-1){
        dom_reload.style.display="inline"
        dom_continue_button.style.display="none"
        dom_punktzahl.style.display="block"

        }
        
})

dom_reload.addEventListener("click", function(){
    punkte= 0;
    dom_punktzahl.innerHTML="erreichte Punktezahl: "+0;
    gemischtes_array = shuffle_array(vokabeln);
    counter = 0;
    wortpaar = hole_de_und_en();
    dasWort_de = wortpaar.de;
    dasWort_en = wortpaar.en;
    dom_Deutsches_Wort.innerHTML = dasWort_de;
    counter_update() ;
    dom_continue_button.style.display="none"
    dom_reload.style.display="none"
    dom_button.disabled=false;
    dom_richtig_oder_falsch.style.display  = "none";
    dom_richtig.style.display  = "none";
    dom_punktzahl.style.display="none"
    dom_eingabe.value=""

})

dom_continue_button.addEventListener("click", function () {
    counter++ ; 
    wortpaar = hole_de_und_en();
    dasWort_de = wortpaar.de;
    dasWort_en = wortpaar.en;
    dom_Deutsches_Wort.innerHTML = dasWort_de;
    dom_richtig_oder_falsch.style.display  = "none";
    dom_richtig.style.display  = "none";
    dom_continue_button.style.display="none"
    dom_button.disabled= false


    dom_eingabe.value="" ;
   counter_update() ;

   dom_eingabe.focus()
})
    


dom_eingabe.addEventListener("keyup",function()
{
  


   { if(event.keyCode===13 && dom_eingabe.value!=""){dom_button.click()}
    dom_continue_button.focus() 
    
}})
dom_continue_button.addEventListener("keyup",function()
{if(event.keyCode===13){dom_continue_button.click()}}
)



function init() {
 punkte= 0;
dom_punktzahl.innerHTML="erreichte Punktezahl: "+0+"/"+(vokabeln.length);
 gemischtes_array = shuffle_array(vokabeln);
 counter = 0;
 wortpaar = hole_de_und_en();
 dasWort_de = wortpaar.de;
 dasWort_en = wortpaar.en;
dom_Deutsches_Wort.innerHTML = dasWort_de;
counter_update() ;
dom_continue_button.style.display="none"
dom_reload.style.display="none"
dom_punktzahl.style.display="none"
dom_eingabe.focus()
}

