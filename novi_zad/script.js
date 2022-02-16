
//div (varijabla theKid) je prvi element the Parent diva
theParent = document.getElementById("theParent");

theKid = document.createElement("div");
theKid.innerHTML = 'Are we there yet?';

// append theKid to the end of theParent
theParent.appendChild(theKid);

// prepend theKid to the beginning of theParent
//theParent.insertBefore(theKid, theParent.firstChild);

//zad1. Stavi h1 na početak body-a i upiši nekakav tekst.
h1=document.createElement("H1");
 textNode=document.createTextNode("Ovo je naslov na početku teksta");
h1.appendChild(textNode);
selector=document.querySelector(".description");
selector.parentNode.prepend(h1);

//zad2. Stavi h3 i upiši nekakav tekst ispred footer-a

//footerNode=document.getElementById("footer");
h3=document.createElement("h3");
h3.innerHTML="Ovo je naslov prije footer-a";
//footerNode.appendChild(h3); //s ovim apendamo na kraj footera

theParent.parentNode.insertBefore(h3, theParent.nextSibling);

/* ovako možemo dobiti isto pomoću funkcije insertAfter
function insertAfter(theParent1, naslov3) {
    theParent1.parentNode.insertBefore(naslov3, theParent1.nextSibling);
  }
  
  var el = document.createElement("h3");
  el.innerHTML = "Ovo je naslov prije footer-a";
  var div = document.getElementById("theParent");
  insertAfter(div, el);  */

  //Zad3. Ispred ul dodaj novi div s nekakvim tekstom
  footerNode=document.getElementById("footer");
  divNode1=document.createElement("div");
divNode1.innerHTML= "Dodali smo novi div element ispred ul liste";
footerNode.insertBefore(divNode1, footerNode.firstChild);

  //Zad4. Između klase description i theParenta dodaj novi div

dodajDiv=document.createElement("div");
dodajDiv.innerHTML="Dodali smo novi div element poslije klase description";
selector.parentNode.insertBefore(dodajDiv, selector.nextSibling);

//probala sam s funkcijom ali ne radi



  //Zad5. Dodaj tekst u li pomoću petlje i array-a

   var arrayList=["Korana", "Mreznica"];
   
   for(var i=0; i<2; i++){
  footerNode.querySelectorAll('li')[i].innerText = arrayList[i];
   }

  //Zad6. Dodaj još tri elementa u listu
  var ul = document.querySelector("ul");
var ul2 = ul.cloneNode(true);
var li = document.createElement('li');

for (var i = 0; i < 3; i++) {
	ul.appendChild(li);
    var li = document.createElement('li');
}


arrayList.push("Kupa", "Karlovacko", "Dobra");
for(var i=0; i<5; i++){
  footerNode.querySelectorAll('li')[i].innerText = arrayList[i];
   }

   //Zad7. Element p u div-u theParent 
   //      zamijeni sa h2 elementom uz neki tekst

h2=document.querySelector("p");
h2.innerHTML="<h2>Ovo je zamjenjen p element</h2>";

   //Zad8. Na početak liste dodaj novi element s nekim tekstom
// imamo varijable ul i li 
var textnode = document.createTextNode("Water");
  li.appendChild(textnode);

ul.insertBefore(li, ul.firstChild);

   //Zad9. Napravi još jednu listu u footer-u sa 3 elementa 
   //        dodaj tekst

  
   
   //Zad10. Spoji elemente prve i druge liste 