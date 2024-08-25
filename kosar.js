import { CIPOK } from "./adatok.js";
import { kosarLISTA } from "./kosarlista.js";


export function kosarTartalomOsszeallit(lista){
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
    const tartalom = kosarTartalomOsszeallit(lista);
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

