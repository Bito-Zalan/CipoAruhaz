import { CIPOK } from "./adatok.js";
import { kosarLISTA } from "./kosarlista.js";


export function kosarLetrehoz(lista){
    let kosarelemek = "";
    lista.forEach(element => {
        kosarelemek += `<div>
        <img class="kosarkep" src="${element.kép}" alt="kep">
        <p>${element.név}<br>
        Ár: ${element.ár}Ft</p>
        <p>------------------------------</p>
        </div>`;
    });
    return kosarelemek;
}

export function kosarMegjelenit(lista){
    const tartalom = kosarLetrehoz(lista);
    const tartalomELEM = $(".kosartartalom");
    tartalomELEM.html(tartalom);
}

export function kosarGomb(){
    const kosarELEM = $(".kosargomb");
    kosarELEM.on("click", function(event){
        const termekIndex = event.target.id;
        kosarLISTA.push(CIPOK[termekIndex]);
        kosarMegjelenit(kosarLISTA);
    });
}

export function rendelesGomb(){
    const rendelesELEM = $(".rendelesgomb");
    rendelesELEM.on("click", function () {
      if (kosarLISTA.length === 0) {
        alert("A kosarad üres!")
      } else{
        alert("Köszönhük a rendelést!");
      }
    })
  }