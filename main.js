import { CIPOK } from "./adatok.js";
import { kartyakLetrehoz, kartyakMegjelenit, tablazatLetrehoz, tablazatMegjelenit,torol,kosarTorolGomb } from "./fuggvenyek.js";
import { szures, rendez,torolEsemeny} from "./esemenykezelo.js";
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
    torolEsemeny();
    /* kosarTorolEsemeny(); */
}