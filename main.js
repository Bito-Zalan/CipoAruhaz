import { CIPOK } from "./adatok.js";
import { kartyakLetrehoz, kartyakMegjelenit, tablazatLetrehoz, tablazatMegjelenit } from "./fuggvenyek.js";
import { szures, rendez } from "./esemenykezelo.js";
import { kosarGomb } from "./kosar.js";

init(CIPOK);
szures();
rendez(CIPOK);
kosarGomb();

export function init(lista){
    var kartyak = kartyakLetrehoz(lista)
    kartyakMegjelenit(kartyak);
    var tablazat = tablazatLetrehoz(lista)
    tablazatMegjelenit(tablazat)
}