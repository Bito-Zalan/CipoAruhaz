import { CIPOK } from "./adatok.js";
import { kartyakLetrehoz, kartyakMegjelenit } from "./fuggvenyek.js";
import { szures, rendez } from "./esemenykezelo.js";
import { kosarGomb, kosarTartalomOsszeallit } from "./kosar.js";

init(CIPOK);
szures();
rendez(CIPOK);
kosarGomb();
kosarTartalomOsszeallit(lista);

export function init(lista){
    var kartyak = kartyakLetrehoz(lista)
    kartyakMegjelenit(kartyak);
}