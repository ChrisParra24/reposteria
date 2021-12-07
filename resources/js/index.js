import { elementos } from "./views/base";
import * as recipeView from "./views/recipeView";

let contador = 0;
//añadimos botones "Nueva" y "Modificar"
elementos.buttonRecipe.addEventListener('click', ()=>{
    recipeView.dibujaBotonPrimeros("padreBotonesPrimeros","buttonNuevaRecipe", "buttonModificarRecipe");
});


//delegacion de eventos
elementos.padreForRecipe.addEventListener('click', (e)=>{

    if(e.target.matches('.buttonNuevaRecipe')){
        recipeView.removerHijo();
        recipeView.dibujarPrimeraFase();
    }
    if(e.target.matches('.btn-siguiente')){
        //guardamos el nombre de la receta

        //guardamos los checbox seleccionados

        //borramos lo que hay en la vista, excepto los botones "atras" "siguiente" "cancelar"
        recipeView.removerHijo();
        //dibujamos la siguiente parte pasando contador y los ingredientes seleccionados
        recipeView.dibujarSegundaFase();
    }

});
