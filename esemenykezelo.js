import { abcRendez, arCsokkenoRendez, arNovekvoRendez, szuresLista, torol} from "./fuggvenyek.js";
import { init } from "./main.js";
import { CIPOK } from "./adatok.js";


export function szures(){
    const SZURES_ELEM = $("#szuro");
    SZURES_ELEM.on("keyup", function () {
        let ertek = SZURES_ELEM.val();

        const SZURT_LISTA = szuresLista(ertek);
        init(SZURT_LISTA);
    })
}

export function rendez(lista){
    const RENDEZ_ELEM = $("#rendezes")
    RENDEZ_ELEM.on("change", function () {
       if(RENDEZ_ELEM.val() === "novekvo"){
        const NOVEKVO_LISTA = arNovekvoRendez(lista)
        init(NOVEKVO_LISTA)
       } 
       if(RENDEZ_ELEM.val() === "csokkeno"){
        const CSOKKENO_LISTA = arCsokkenoRendez(lista)
        init(CSOKKENO_LISTA)
       }
       if(RENDEZ_ELEM.val() === "abc"){
        const ABC_LISTA = abcRendez(lista)
        init(ABC_LISTA)
       }
    });
}

export function torolEsemeny(){
    const torolELEM = $(".torol");
    torolELEM.on("click", function(event){
        let index = event.target.id;
        const LISTA = torol(CIPOK, index);
        init(LISTA);
    });
  }
  
 /*  export function kosarTorolEsemeny(){
    const KOSARTOROLELEM = $(".kosargomb");
    KOSARTOROLELEM.on("click", function(event){
        let index = event.target.id;
        const LISTA = kosarTorolGomb(CIPOK, index);
        init(LISTA);
    });
  }
 */
