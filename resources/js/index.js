import { elementos , eliminarHijo} from "./views/base";
import * as recipeView from "./views/recipeView";
import * as ingredientView from "./views/ingredientView";
import * as quotationView from './views/quotationView';

let contadorSiguiente = 0;
//añadimos botones "Nueva" y "Modificar"
elementos.buttonRecipe.addEventListener('click', ()=>{
    recipeView.dibujaBotonPrimeros("padreBotonesPrimeros","buttonNuevaRecipe", "buttonModificarRecipe");
});

elementos.buttonIngedient.addEventListener('click', ()=>{
    //añadimos los botones "nueva y modificar"
    ingredientView.dibujarBotones('padreBotones','buttonNewIngredient','buttonModifyIngredient');
});

elementos.buttonCost.addEventListener('click', () => {
    //añadimos la primer parte para la cotizacion
    quotationView.primerParte();
});

//delegacion de eventos
elementos.padreForRecipe.addEventListener('click', (e)=>{

    if(e.target.matches('.buttonNuevaRecipe')){
        eliminarHijo('receta');
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
            eliminarHijo('hijo');
            //dibujamos la siguiente parte pasando contador y los ingredientes seleccionados
            recipeView.dibujarSegundaFase();
            contadorSiguiente++;

        }else if(contadorSiguiente === 1){
            //debemos de guardar lo que hay de la cantidad de las cards en nuestro objeto

            //removemos lo que hay de hijos (las cards)
            eliminarHijo('ingrediente');
            //dibujamos la ultima fase de nuestras recetas
            recipeView.dibujarTerceraFase();
            contadorSiguiente++;

        }else if(contadorSiguiente === 2){
            //se guarda la informacion en la bd

            //mandamos alerta de que se realizo el guardado de manera correcta

            //borramos todos los elementos y reiniciamos el contador
            eliminarHijo('resumen');
            contadorSiguiente = 0;
        }
    }
    if(e.target.matches('.buttonModificarRecipe')){
        //borrar los botones que hay

        //dibujamos la vista de actualizar
        recipeView.dibujarActualizar();
    }
    if(e.target.matches('.btn-cargar-datos-ingredientes')){
        //agregar a la vista los ingredientes para poder actualizarlos
        //pueden ser igual en cards para reutilizar código
        recipeView.dibujarIngredientesActualizar();
    }
    if(e.target.matches('.btn-guardar-actualizar')){
        //guardamos los cambios hechos en los ingredientes
        //mandamos mensaje de exito al usuario
        //quitamos los elementos de la vista
        //recipeView.removerHijo();
    }
    //***************************************** Ingredientes */
    if(e.target.matches('.buttonNewIngredient')){
        //borramos los botones "nueva" y "actualizar"
        eliminarHijo('ingrediente');
        //dibujamos el formulario para agregar nuestro ingrediente
        ingredientView.formularioNew();

    }

    if(e.target.matches('.btn-salir-formulario')){
        //borramos el formulario de alta de ingredientes
        eliminarHijo('ingrediente');
    }

    if(e.target.matches('.buttonModifyIngredient')){
        //borramos los botones "nueva" y "actualizar"
        eliminarHijo('ingrediente');
        //dibujamos la parte de modificar nuestro ingrediente
        ingredientView.modifyIngredient();
    }
    if(e.target.matches('.btn-salir-modify')){
        //borramos todo
        eliminarHijo('resumen');
    }


    /******************************* Cotizacion*/
    if(e.target.matches('.btn-carga-cotizacion')){
        //dibujamos la segunda parte
        quotationView.segundaParte();
    }

    if(e.target.matches('.btn-reset-datos')){
        //debemos de eliminar solo el segundo hijo que es la lista
        quotationView.eliminarListaIngredientes();
    }

    if(e.target.matches('.btn-salir-cotizacion')){
        //borramos todo
        eliminarHijo('resumen');
    }
});
