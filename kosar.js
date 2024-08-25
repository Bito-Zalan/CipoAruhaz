import { CIPOK } from "./adatok.js";
import { KOSARLISTA } from "./kosarlista.js";


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
    const TARTALOM = kosarLetrehoz(lista);
    const TARTALOM_ELEM = $(".kosartartalom");
    TARTALOM_ELEM.html(TARTALOM);
}

export function kosarGomb(){
    const KOSAR_ELEM = $(".kosargomb");
    KOSAR_ELEM.on("click", function(event){
        const TERMEK_INDEX = event.target.id;
        KOSARLISTA.push(CIPOK[TERMEK_INDEX]);
        kosarMegjelenit(KOSARLISTA);
    });
}

export function rendelesGomb(){
    const RENDELES_ELEM = $(".rendelesgomb");
    RENDELES_ELEM.on("click", function () {
      if (KOSARLISTA.length === 0) {
        alert("A kosarad üres!")
      } else{
        alert("Köszönhük a rendelést!");
      }
    })
  }