import { elementos } from "./views/base";
import * as recipeView from "./views/recipeView";

let contadorSiguiente = 0;
//añadimos botones "Nueva" y "Modificar"
elementos.buttonRecipe.addEventListener('click', ()=>{
    recipeView.dibujaBotonPrimeros("padreBotonesPrimeros","buttonNuevaRecipe", "buttonModificarRecipe");
});


//delegacion de eventos
elementos.padreForRecipe.addEventListener('click', (e)=>{

    if(e.target.matches('.buttonNuevaRecipe')){
        recipeView.removerHijo(contadorSiguiente);
        recipeView.dibujarPrimeraFase();
    }
// <<<<<<< HEAD
    if(e.target.matches('#btn_next')){
        if(contadorSiguiente===0){
            //guardamos el nombre de la receta
// =======
//     if(e.target.matches('#btn_next')){
//     // if(e.target.matches('.btn-siguiente')){
//         //guardamos el nombre de la receta
// >>>>>>> main

            //guardamos los checbox seleccionados

            //borramos lo que hay en la vista, excepto los botones "atras" "siguiente" "cancelar"
            recipeView.removerHijo(contadorSiguiente);
            //dibujamos la siguiente parte pasando contador y los ingredientes seleccionados
            recipeView.dibujarSegundaFase();
            contadorSiguiente++;

        }else if(contadorSiguiente === 1){
            //debemos de guardar lo que hay de la cantidad de las cards en nuestro objeto

            //removemos lo que hay de hijos (las cards)
            recipeView.removerHijo(contadorSiguiente);
            //dibujamos la ultima fase de nuestras recetas
            recipeView.dibujarTerceraFase();
            contadorSiguiente++;

        }else if(contadorSiguiente === 2){
            //se guarda la informacion en la bd

            //mandamos alerta de que se realizo el guardado de manera correcta

            //borramos todos los elementos y reiniciamos el contador
            recipeView.removerHijo(contadorSiguiente);
            contadorSiguiente = 0;
        }
    }
    if(e.target.matches('.buttonModificarRecipe')){
        //borrar los botones que hay
        recipeView.removerHijo();
        //dibujamos la vista de actualizar
        recipeView.dibujarActualizar();
    }
    if(e.target.matches('.btn-cargar-datos-ingredientes')){
        //agregar a la vista los ingredientes para poder actualizarlos
    }

});
