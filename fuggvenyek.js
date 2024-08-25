import { CIPOK } from "./adatok.js";


export function kartyakLetrehoz(lista) {
  let kartyak = "";

  lista.forEach((cipo, i) => {
    kartyak += `
        <div class="card text-black bg-dark mb-3" style="max-width: 14rem;">
        <img src="${cipo.kép}" class="card-img-top" alt="kep">
            <div class="card-body">
                <div class="ciponev"><h4>${cipo.név}</h4></div>
                <p class="card-text">Ár: ${cipo.ár} Ft<br>
                Tipus: ${cipo.tipus}<br>
                Elérhető méretek: ${cipo.méret}</p>
                <button id="${i}" type="button" class="kosargomb btn btn-default">Kosárba</button>
            </div>
        </div>
        `;
  });
  return kartyak;
}

export function kartyakMegjelenit(kartyak) {
  const KARTYAKTARTALOM = $(".termekek");
  KARTYAKTARTALOM.html(kartyak);
}

export function tablazatLetrehoz(lista) {
  let tablazat = `<div class="table-responsive">
    <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Név</th>
        <th>Kép</th>
        <th>Méret</th>
        <th>Szín</th>
        <th>Készlet</th>
        <th>Szerkesztés</th>
        <th>Törlés</th>
      </tr>
    </thead>
    <tbody>`;

  lista.forEach((cipo,index) => {
    tablazat += `<tr>
                <td>${cipo.név}</td>
                <td><img class="adminkep" src="${cipo.kép}" alt="kep"></td>
                <td>${cipo.méret}</td>
                <td>${cipo.szin}</td>
                <td>${cipo.db}db</td>
                <td class="szerkesztgomb"><button id = "${index}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
              </svg></button></td>
                <td class="adminszoveg"><button id="torol-${index}" class="torol">🗑️</button></td>
            </tr>`;
  });
  tablazat += `</tbody></table></div>`
  return tablazat;
}

export function tablazatMegjelenit(tablazat) {
  const TABLAZATTARTALOM = $(".tablazat");
  TABLAZATTARTALOM.html(tablazat);
}

export function szuresLista(ertek) {
  const LISTA = CIPOK.filter(function (cipo) {
    return (
      cipo.név.toUpperCase().includes(ertek.toUpperCase()) ||
      cipo.tipus.toUpperCase().includes(ertek.toUpperCase())
    );
  });
  return LISTA;
}

export function arNovekvoRendez(lista) {
  lista.sort(function (cipo1, cipo2) {
    return cipo1.ár - cipo2.ár;
  });
  return lista;
}

export function arCsokkenoRendez(lista) {
  lista.sort(function (cipo1, cipo2) {
    return cipo2.ár - cipo1.ár;
  });
  return lista;
}
export function abcRendez(lista) {
  lista.sort(function (cipo1, cipo2) {
    return cipo1.név.localeCompare(cipo2.név);
  });
  return lista;
}

export function rendelesGomb(){
  const rendelesELEM = $(".rendelesgomb");
  rendelesELEM.on("click", function (event) {
      
  })
}

export function torol(lista, index){
  lista.splice(index, 1);
  return lista;
}

export function kosarTorolGomb(lista,index){
      lista.splice(index,1);
      return lista;
}