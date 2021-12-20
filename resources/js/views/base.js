export const elementos = {
    buttonRecipe : document.getElementById('buttonRecipe'),
    buttonIngedient : document.getElementById('buttonIngredient'),
    buttonCost : document.getElementById('buttonCost'),
    padreForRecipe : document.getElementById('cuerpo'),
    buttonRecipeNew : document.querySelector('.buttonNuevaRecipe'),
    buttonRecipeModify : document.querySelector('buttonModificarRecipe'),
    buttonAtras : document.querySelector('btn-atras'),
    buttonSiguiente : document.querySelector('btn-siguiente'),
    buttonCancelar : document.querySelector('btn-cancelar'),
    buttonNewIngredient : document.querySelector('.buttonNewIngredient'),
    buttonModifyIngredient: document.querySelector('.buttonModifyIngredient'),
    buttonSalirForm : document.querySelector('.btn-salir-formulario'),
    buttonSalirModifyIngre : document.querySelector('.btn-salir-modify'),
    buttonCargaDatosIng: document.querySelector('.btn-carga-ingre-datos')
};

export const eliminarHijo = (cadena) => {
    const padre = elementos.padreForRecipe;
    const numHijos = padre.childElementCount;
    if(numHijos === 1){
        padre.removeChild(padre.childNodes[0]);
    }else{
        if(cadena === 'hijo'){
            eliminaHijos(padre,cadena,numHijos-1);
        }else if(cadena === 'ingrediente'){
            eliminaHijos(padre,cadena,numHijos-1);
        }else if(cadena === 'resumen'){
            eliminaHijos(padre,cadena,numHijos-1);
            if(padre.hasChildNodes){
                let hijo = document.getElementById('hijo-botones');
                padre.removeChild(hijo);
            }
        }
    }
};

const eliminaHijos = (padre,cadena,limite) => {
    for(let i=0;i<limite;i++){
        let hijo = document.getElementById(`${cadena}-${i}`);
        padre.removeChild(hijo);
    }
}
