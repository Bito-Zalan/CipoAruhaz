import { CIPOK } from "./adatok.js";
import { kartyakLetrehoz, kartyakMegjelenit, tablazatLetrehoz, tablazatMegjelenit} from "./fuggvenyek.js";
import { szures, rendez,torolEsemeny, mentesGombAtvaltoztat} from "./esemenykezelo.js";
import { kosarGomb, rendelesGomb } from "./kosar.js";

init(CIPOK);

szures();
rendez(CIPOK);

kosarGomb();
rendelesGomb();
mentesGombAtvaltoztat();

export function init(lista){
    var kartyak = kartyakLetrehoz(lista)
    kartyakMegjelenit(kartyak);
    var tablazat = tablazatLetrehoz(lista)
    tablazatMegjelenit(tablazat)
    torolEsemeny();
}