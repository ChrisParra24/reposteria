import { elementos } from "./base";

export const dibujarBotones = (id0,id1,id2) => {
    const hijo = `<div class="container-fluid" id="${id0}">
                    <button type="button" class="btn btn-secondary ${id1}" id="${id1}"><i class="fas fa-plus-square"></i>Nueva</button>
                    <button type="button" class="btn btn-secondary ${id2}" id="${id2}"><i class="fas fa-sync-alt"></i>Actualizar</button>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};

export const formularioNew = () => {
    const hijo = `<div id="hijo-0">
                    <h3>Datos del ingrediente</h3>
                    <form action="">
                        <label for="">Nombre</label>
                        <input type="text" name="" id="">
                        <label for="">Precio</label>
                        <input type="number" name="" id="" placeholder="00.00">
                        <label for="">Cantidad</label>
                        <input type="number" name="" id="" placeholder="0.000">
                        <select name="" id="">
                            <option value="">kg</option>
                            <option value="">lt</option>
                            <option value="">pza</option>
                        </select>
                        <input type="submit" value="Agregar">
                    </form>
                    <button type="button" class="btn-salir-formulario">Salir</button>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};

export const modifyIngredient = () => {
    const hijo = `<div id="resumen-0">
                    <h4>Ingrediente</h4>
                    <select name="" id="">
                        <option value="">Ingrediente 1</option>
                        <option value="">Ingrediente 2</option>
                        <option value="">Ingrediente 3</option>
                    </select>
                    <button type="button" class="btn-carga-ingre-datos">Cargar datos</button>
                </div>
                <div id="resumen-1">
                    <div>
                        <h4>Datos actuales</h4>
                        <label for="">Precio</label>
                        <input type="number" name="" id="" disabled="true">
                        <label for="">Cantidad</label>
                        <input type="number" name="" id="" disabled="true">
                        <label for="">Unidad</label>
                        <input type="number" name="" id="" disabled="true">
                    </div>
                    <div>
                        <h4>Datos nuevos</h4>
                        <label for="">Precio</label>
                        <input type="number" name="" id="" placeholder="00.00">
                        <label for="">Cantidad</label>
                        <input type="number" name="" id="" placeholder="0.000">
                        <button type="button">Actualizar</button>
                        <button type="button">Cancelar</button>
                    </div>
                </div>
                <div id="hijo-botones">
                    <button type="button" class="btn-salir-modify">Salir</button>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};
