/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/views/base.js":
/*!************************************!*\
  !*** ./resources/js/views/base.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementos": () => (/* binding */ elementos)
/* harmony export */ });
var elementos = {
  buttonRecipe: document.getElementById('buttonRecipe'),
  buttonIngedient: document.getElementById('buttonIngredient'),
  buttonCost: document.getElementById('buttonCost'),
  padreForRecipe: document.getElementById('cuerpo'),
  buttonRecipeNew: document.querySelector('.buttonNuevaRecipe'),
  buttonRecipeModify: document.querySelector('buttonModificarRecipe'),
  buttonAtras: document.querySelector('btn-atras'),
  buttonSiguiente: document.querySelector('btn-siguiente'),
  buttonCancelar: document.querySelector('btn-cancelar')
};

/***/ }),

/***/ "./resources/js/views/recipeView.js":
/*!******************************************!*\
  !*** ./resources/js/views/recipeView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dibujaBotonPrimeros": () => (/* binding */ dibujaBotonPrimeros),
/* harmony export */   "dibujarPrimeraFase": () => (/* binding */ dibujarPrimeraFase),
/* harmony export */   "dibujarSegundaFase": () => (/* binding */ dibujarSegundaFase),
/* harmony export */   "dibujarTerceraFase": () => (/* binding */ dibujarTerceraFase),
/* harmony export */   "dibujarActualizar": () => (/* binding */ dibujarActualizar),
/* harmony export */   "removerHijo": () => (/* binding */ removerHijo)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./resources/js/views/base.js");

var dibujaBotonPrimeros = function dibujaBotonPrimeros(id0, id1, id2) {
  // const hijo = `<div class="row justify-content-center" id="${id0}">
  //                     <div class="d-grid gap-2 col-3">
  //                         <button type="button" class="btn btn-secondary ${id1}" id="${id1}">Nueva</button>
  //                     </div>
  //                     <div class="d-grid gap-2 col-3">
  //                         <button type="button" class="btn btn-secondary ${id2}" id="${id2}">Actualizar</button>
  //                     </div>
  //                 </div>`;
  var hijo = "<div class=\"container-fluid\" id=\"".concat(id0, "\">\n                    <button type=\"button\" class=\"btn btn-secondary ").concat(id1, "\" id=\"").concat(id1, "\"><i class=\"fas fa-plus-square\"></i>Nueva</button>\n                    <button type=\"button\" class=\"btn btn-secondary ").concat(id2, "\" id=\"").concat(id2, "\"><i class=\"fas fa-sync-alt\"></i>Actualizar</button>\n                </div>");
  _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.insertAdjacentHTML('afterbegin', hijo);
};
var dibujarPrimeraFase = function dibujarPrimeraFase() {
  var numHijo = 0; //primero se dibujara: 1) etiqueta y su text input

  var hijo1 = "<div class=\"row-form\" id=\"hijo-".concat(numHijo, "\">\n                        <h1 class=\"title-section\">Nueva receta</h1>\n                        <div class=\"form-group\">\n                            <label for=\"recipe\"><i class=\"fas fa-file-signature fas-form\"></i>Nombre de la receta</label>\n                            <input type=\"text\" name=\"\" class=\"form-control-secondary\" id=\"recipe\">\n                        </div>\n                    </div>");
  _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.insertAdjacentHTML('beforeend', hijo1);
  numHijo++; //ejecutar una llamada a la BD para que nos de los ingredientes que hay hasta el momento (TODOS los ingredientes)
  //esta parte es para dibujar todos los ingredientes que tengamos de la BD y por cada ingrediente se debera dibujar
  //su respectivo html y agregar al padre que le corresponde

  var hijo2 = " <div class=\"row-form\" id=\"hijo-".concat(numHijo, "\">\n                        <div class=\"form-group\">\n                            <label for=\"\">Nombre de ingrediente 1</label>\n                            <input type=\"checkbox\" name=\"\" id=\"\">\n                        </div>\n                    </div>");
  _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.insertAdjacentHTML('beforeend', hijo2);
  numHijo++;
  var hijo3 = "<div class=\"row-form\" id=\"hijo-".concat(numHijo, "\">\n                        <div class=\"form-group\">\n                            <label for=\"\">Nombre de ingrediente 2</label>\n                            <input type=\"checkbox\" name=\"\" id=\"\">\n                        </div>\n                    </div>");
  _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.insertAdjacentHTML('beforeend', hijo3);
  numHijo++;
  var hijo4 = "<div class=\"row-buttons\" id=\"hijo-".concat(numHijo, "\">\n                        <button class=\"btn btn-secondary\"><i class=\"fas fa-arrow-left\"></i>Atr\xE1s</button>\n                        <button class=\"btn btn-primary\" id=\"btn_next\"><i class=\"fas fa-arrow-right\"></i>Siguiente</button>\n                        <button class=\"btn btn-secondary\"><i class=\"fas fa-window-close\"></i>Cancelar</button>\n                    </div>");
  _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.insertAdjacentHTML('beforeend', hijo4);
};
var dibujarSegundaFase = function dibujarSegundaFase(ingredientes) {
  var numIngrediente = 0; //vamos a dibujar cards con los ingredientes que fueron seleccionados y que nos pasaran
  //por el momento pondremos una card solamente

  var hijo = "<div class=\"container-cards\" id=\"ingrediente-".concat(numIngrediente, "\">\n                    <div class=\"card\">\n                        <h3 class=\"card-title\">Nombre Ingrediente</h3>\n                        <h4 class=\"card-text\">Cantidad 1kg</h4>\n                        <h4 class=\"card-text\">Costo $150</h4>\n                        <h4 class=\"card-text\">Cantidad a usar:</h4>\n                        <input type=\"text\" name=\"\" id=\"\" placeholder=\"0.0 gr.\" class=\"form-control-secondary\">\n                        <h3 class=\"card-text\">Total: $75.00</h3>\n                    </div>\n                </div>");
  _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.insertAdjacentHTML('afterbegin', hijo);
};
var dibujarTerceraFase = function dibujarTerceraFase(receta) {
  //let numResumen = 0;
  var hijo = "<div class=\"row-form\" id=\"resumen-0\">\n                    <h2>Receta: <span class=\"card-title\">Nombre de la receta</span></h2>\n                </div>\n                <div class=\"row-form\" id=\"resumen-1\">\n                    <h3 class=\"card-text\">Ingredientes:</h3>\n                </div>\n                <div class=\"row-form\" id=\"resumen-2\">\n                        <h5 class=\"card-text\">Nombre inrediente 200gr = $ 00.00</h5>\n                </div>\n                <div class=\"row-form\" id=\"resumen-3\">\n                    <h2 class=\"card-text\">Total: $520.20</h2>\n                </div>";
  _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.insertAdjacentHTML('afterbegin', hijo);
};
var dibujarActualizar = function dibujarActualizar() {
  //debemos de tener todas las recetas y mandarlas a dibujar
  var hijo = "<div id=\"actualiza-1\">\n                    <h4>Receta</h4>\n                    <select name=\"\" id=\"\">\n                        <option value=\"\">Seleccione una receta</option>\n                        <option value=\"\">Receta 1</option>\n                        <option value=\"\">Receta 2</option>\n                        <option value=\"\">Receta 4</option>\n                    </select>\n                    <button class=\"btn-cargar-datos-ingredientes\">Cargar datos</button>\n                </div>";
  _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.insertAdjacentHTML('beforeend', hijo);
};
var removerHijo = function removerHijo(contador) {
  var numHijos = _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.childElementCount;
  var padre = _base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe;

  if (numHijos === 1) {
    padre.removeChild(padre.childNodes[0]);
  } else {
    if (contador === 0) {
      eliminaHijos(padre, 'hijo', numHijos - 1);
    } else if (contador === 1) {
      eliminaHijos(padre, 'ingrediente', numHijos - 1);
    } else if (contador === 2) {
      eliminaHijos(padre, 'resumen', numHijos - 1);
      var hijo = document.getElementById('hijo-receta-botones');
      padre.removeChild(hijo);
    }
  }
};

var eliminaHijos = function eliminaHijos(padre, cadena, limite) {
  for (var i = 0; i < limite; i++) {
    var hijo = document.getElementById("".concat(cadena, "-").concat(i));
    padre.removeChild(hijo);
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/base */ "./resources/js/views/base.js");
/* harmony import */ var _views_recipeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/recipeView */ "./resources/js/views/recipeView.js");


var contadorSiguiente = 0; //añadimos botones "Nueva" y "Modificar"

_views_base__WEBPACK_IMPORTED_MODULE_0__.elementos.buttonRecipe.addEventListener('click', function () {
  _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.dibujaBotonPrimeros("padreBotonesPrimeros", "buttonNuevaRecipe", "buttonModificarRecipe");
}); //delegacion de eventos

_views_base__WEBPACK_IMPORTED_MODULE_0__.elementos.padreForRecipe.addEventListener('click', function (e) {
  if (e.target.matches('.buttonNuevaRecipe')) {
    _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.removerHijo(contadorSiguiente);
    _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.dibujarPrimeraFase();
  } // <<<<<<< HEAD


  if (e.target.matches('#btn_next')) {
    if (contadorSiguiente === 0) {
      //guardamos el nombre de la receta
      // =======
      //     if(e.target.matches('#btn_next')){
      //     // if(e.target.matches('.btn-siguiente')){
      //         //guardamos el nombre de la receta
      // >>>>>>> main
      //guardamos los checbox seleccionados
      //borramos lo que hay en la vista, excepto los botones "atras" "siguiente" "cancelar"
      _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.removerHijo(contadorSiguiente); //dibujamos la siguiente parte pasando contador y los ingredientes seleccionados

      _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.dibujarSegundaFase();
      contadorSiguiente++;
    } else if (contadorSiguiente === 1) {
      //debemos de guardar lo que hay de la cantidad de las cards en nuestro objeto
      //removemos lo que hay de hijos (las cards)
      _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.removerHijo(contadorSiguiente); //dibujamos la ultima fase de nuestras recetas

      _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.dibujarTerceraFase();
      contadorSiguiente++;
    } else if (contadorSiguiente === 2) {
      //se guarda la informacion en la bd
      //mandamos alerta de que se realizo el guardado de manera correcta
      //borramos todos los elementos y reiniciamos el contador
      _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.removerHijo(contadorSiguiente);
      contadorSiguiente = 0;
    }
  }

  if (e.target.matches('.buttonModificarRecipe')) {
    //borrar los botones que hay
    _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.removerHijo(); //dibujamos la vista de actualizar

    _views_recipeView__WEBPACK_IMPORTED_MODULE_1__.dibujarActualizar();
  }

  if (e.target.matches('.btn-cargar-datos-ingredientes')) {//agregar a la vista los ingredientes para poder actualizarlos
  }
});
})();

/******/ })()
;