import { elementos } from "./base";

export const dibujarBotones = (id0,id1,id2)=> {
    const hijo = `<div class="container-fluid" id="${id0}">
                    <button type="button" class="btn btn-secondary ${id1}" id="${id1}"><i class="fas fa-plus-square"></i>Nueva</button>
                    <button type="button" class="btn btn-secondary ${id2}" id="${id2}"><i class="fas fa-sync-alt"></i>Actualizar</button>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};
