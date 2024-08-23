import { CIPOK } from "./adatok.js";



export function kartyakLetrehoz(lista){
    let kartyak = "";

    lista.forEach(cipo => {
        kartyak += `
        <div class="card text-black bg-dark mb-3" style="max-width: 14rem;">
        <img src="${cipo.kép}" class="card-img-top" alt="kep">
            <div class="card-body">
                <div class="ciponev"><h4>${cipo.név}</h4></div>
                <p class="card-text">Ár: ${cipo.ár} Ft</p>
                <p class="card-text">Tipus: ${cipo.tipus}<br>
                Elérhető méretek: ${cipo.méret}</p>
                <button id="${i}" type="button" class="kosar btn btn-default">Kosárba</button>
            </div>
        </div>
        `
    });
    return kartyak;
}

export function kartyakMegjelenit(kartyak){
    const KARTYAK_CONTAINER = $(".termekek");
    KARTYAK_CONTAINER.html(kartyak);
}

export function szuresLista(ertek){
    const LISTA = CIPOK.filter(function (cipo) {
        return (cipo.név.toUpperCase().includes(ertek.toUpperCase()) || cipo.tipus.toUpperCase().includes(ertek.toUpperCase()))
    })
    return LISTA;
}

export function arNovekvoRendez(lista){
    lista.sort(function (cipo1, cipo2) {
        return cipo1.ár - cipo2.ár
    })
    return lista;
}

export function arCsokkenoRendez(lista){
    lista.sort(function (cipo1, cipo2) {
        return cipo2.ár - cipo1.ár
    })
    return lista;
}
export function abcRendez(lista){
    lista.sort(function(cipo1, cipo2){
        return cipo1.név.localeCompare(cipo2.név)
    })
    return lista;
}
