import { CIPOK } from "./adatok.js";
import { kosarLISTA } from "./kosarlista.js";


export function kosarTartalomOsszeallit(lista){
    let txt = "";
    lista.forEach(element => {
        txt += `<div>`;
        txt += `<p>${element.nev}</p>`;
        txt += `<p>${element.ar}Ft</p>`;
        txt += `</div>`;
    });
    return txt;
}

export function kosarGomb(){
    const kosarELEM = $(".kosar");
    kosarELEM.on("click", function(event){
        const termekIndex = event.target.id;
        kosarLISTA.push(CIPOK[termekIndex]);
        kosarInit(kosarLISTA);
    });
}

export function kosarInit(lista){
    const tartalom = kosarTartalomOsszeallit(lista);
    const tartalomELEM = $(".kosarTartalom");
    tartalomELEM.html(tartalom);
}