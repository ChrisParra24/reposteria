import { elementos } from "./base";

export const primerParte = () => {
    //los option deben ser con un ciclo
    const hijo = `<div id="resumen-0" class="form form-login">
                    <div class="form-group">
                        <label for="">Nombre</label>
                        <select name="" id="">
                            <option value="">Receta 1</option>
                            <option value="">Receta 2</option>
                            <option value="">Receta 3</option>
                        </select>
                    </div>
                    <div class="container-btn">
                        <button type="button" class="btn-carga-cotizacion btn btn-primary">Cargar datos</button>
                    </div>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};

export const segundaParte = () => {
    const hijo = `<div id="resumen-1" class="form form-login">
                    <div id="lista-ingredients">
                        <div id="cabecera-cotizacion">
                            <h1>Datos de ingredientes</h1>
                            <h1>Cantidad</h1>
                            <h1>Precio</h1>
                        </div>
                        <br>
                        <hr>
                        <ul>
                            <li>
                                <h4>NombreIngrediente</h4>
                                <h4>00.00</h4>
                                <h4>(kg,lt,pza)</h4>
                                <input type="number" name="" id="" placeholder="0.000">
                                <input type="number" name="" id="" placeholder="00.00" disabled="true">
                            </li>
                        </ul>
                    </div>
                    <div id="total-cotizacion" class="container-fluid">
                        <h2>TOTAL</h2>
                        <input type="text" disabled="true">
                    </div>
                    <br>
                    <hr>
                    <div id="costo-total">
                        <div id="cantidades-extra">
                            <h3>Porcentaje1 (%)</h3>
                            <h4>cantidadPorcentaje</h4>
                            <h3>Otra cantidad</h3>
                            <h4>cantidad</h4>
                        </div>
                        <div id="precio-calculado" class="container-fluid">
                            <h2>COSTO TOTAL</h2>
                            <input type="text" placeholder="$ 00.00" disabled="true">
                        </div>
                    </div>
                </div>
                <div id="hijo-botones" class="container-fluid">
                    <button type="button" class="btn-salir-cotizacion btn btn-secondary"><i class="fas fa-window-close"></i>Salir</button>
                    <button type="button" class="btn-reset-datos btn btn-alert"><i class="fas fa-minus-circle"></i>Borrar datos</button>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('beforeend',hijo);
};


export const eliminarListaIngredientes = () => {
    const padre = elementos.padreForRecipe;
    let hijo = document.getElementById('resumen-1');
    padre.removeChild(hijo);
};
