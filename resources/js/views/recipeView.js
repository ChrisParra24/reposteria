import {elementos} from './base';

export const dibujaBotonPrimeros = (id0,id1,id2) => {
    const hijo = `<div class="container-fluid" id="${id0}">
                    <button type="button" class="btn btn-secondary ${id1}" id="${id1}"><i class="fas fa-plus-square"></i>Nueva</button>
                    <button type="button" class="btn btn-secondary ${id2}" id="${id2}"><i class="fas fa-sync-alt"></i>Actualizar</button>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};

export const dibujarPrimeraFase = () => {
    let numHijo = 0;
    //primero se dibujara: 1) etiqueta y su text input
    const hijo1 = `<div class="row-form" id="hijo-${numHijo}">
                        <h1 class="title-section">Nueva receta</h1>
                        <div class="form-group">
                            <label for="recipe"><i class="fas fa-file-signature fas-form"></i>Nombre de la receta</label>
                            <input type="text" name="" class="form-control-secondary" id="recipe">
                        </div>
                    </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('beforeend',hijo1);
    numHijo++;
    //ejecutar una llamada a la BD para que nos de los ingredientes que hay hasta el momento (TODOS los ingredientes)

    //esta parte es para dibujar todos los ingredientes que tengamos de la BD y por cada ingrediente se debera dibujar
    //su respectivo html y agregar al padre que le corresponde
    const hijo2 = ` <div class="row-form" id="hijo-${numHijo}">
                        <div class="form-group">
                            <label for="">Nombre de ingrediente 1</label>
                            <input type="checkbox" name="" id="">
                        </div>
                    </div>`
    elementos.padreForRecipe.insertAdjacentHTML('beforeend',hijo2);
    numHijo++;

    const hijo3 =   `<div class="row-form" id="hijo-${numHijo}">
                        <div class="form-group">
                            <label for="">Nombre de ingrediente 2</label>
                            <input type="checkbox" name="" id="">
                        </div>
                    </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('beforeend',hijo3);
    numHijo++;

<<<<<<< HEAD
    const hijo4 = `<div class="row mt-2 justify-content-center" id="hijo-receta-botones">
                        <div class="col-2">
                            <button class="btn-atras">Atras</button>
                        </div>
                        <div class="col-2">
                            <button class="btn-siguiente">Siguiente</button>
                        </div>
                        <div class="col-2">
                            <button class="btn-cancelar">Cancelar</button>
                        </div>
=======
    const hijo4 = `<div class="row-buttons" id="hijo-${numHijo}">
                        <button class="btn btn-secondary"><i class="fas fa-arrow-left"></i>Atrás</button>
                        <button class="btn btn-primary" id="btn_next"><i class="fas fa-arrow-right"></i>Siguiente</button>
                        <button class="btn btn-secondary"><i class="fas fa-window-close"></i>Cancelar</button>
>>>>>>> main
                    </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('beforeend',hijo4);
};

export const dibujarSegundaFase = (ingredientes) => {
    const numIngrediente=0;
    //vamos a dibujar cards con los ingredientes que fueron seleccionados y que nos pasaran
    //por el momento pondremos una card solamente
    const hijo = `<div class="container-cards" id="ingrediente-${numIngrediente}">
                    <div class="card">
                        <h3 class="card-title">Nombre Ingrediente</h3>
                        <h4 class="card-text">Cantidad 1kg</h4>
                        <h4 class="card-text">Costo $150</h4>
                        <h4 class="card-text">Cantidad a usar:</h4>
                        <input type="text" name="" id="" placeholder="0.0 gr." class="form-control-secondary">
                        <h3 class="card-text">Total: $75.00</h3>
                    </div>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};

export const dibujarTerceraFase = (receta) => {
    //let numResumen = 0;
    const hijo = `<div class="row mt-3 justify-content-center" id="resumen-0">
                    <div class="col-12">
                        <h1>Receta: Nombre_de_la_receta</h1>
                    </div>
                </div>
                <div class="row mt-5 justify-content-center" id="resumen-1">
                    <div class="col-12">
                        <h3>Ingredientes:</h3>
                    </div>
                </div>
                <div class="row mt-3 justify-content-center" id="resumen-2">
                    <div class="col-6">
                        <h5>Nombre_inrediente 200gr = $ 00.00</h5>
                    </div>
                </div>
                <div class="row mt-5 justify-content-center" id="resumen-3">
                    <div class="col-12">
                        <h2>Total: $520.20</h2>
                    </div>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};

export const removerHijo = (contador) => {
    const numHijos = elementos.padreForRecipe.childElementCount;
    const padre = elementos.padreForRecipe;
    if(numHijos === 1){
        padre.removeChild(padre.childNodes[0]);
    }else{
        if(contador === 0 ){
            eliminaHijos(padre,'hijo',numHijos-1);
        }else if(contador === 1){
            eliminaHijos(padre,'ingrediente',numHijos-1);
        }else if(contador === 2){
            eliminaHijos(padre,'resumen',numHijos-1);
            const hijo = document.getElementById('hijo-receta-botones');
            padre.removeChild(hijo);
        }
    }
};


const eliminaHijos = (padre,cadena,limite) => {
    for(let i=0;i<limite;i++){
        let hijo = document.getElementById(`${cadena}-${i}`);
        padre.removeChild(hijo);
    }
}
