import { elementos } from "./base";

export const dibujarBotones = (id0,id1,id2) => {
    const hijo = `<div class="container-fluid" id="${id0}">
                    <button type="button" class="btn btn-secondary ${id1}" id="${id1}"><i class="fas fa-plus-square"></i>Nueva</button>
                    <button type="button" class="btn btn-secondary ${id2}" id="${id2}"><i class="fas fa-sync-alt"></i>Actualizar</button>
                </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};

export const formularioNew = () => {
    const hijo = `<div  class="container" id="hijo-0">
                        <h3 class="title-section">Datos del ingrediente</h3>
                        <form action="" class="form form-login">
                            <div class="form-group">
                                <label for="">Nombre</label>
                                <input type="text" name="" id="">
                            </div>
                            <div class="form-group">
                                <label for="">Precio</label>
                                <input type="number" name="" id="" placeholder="00.00">
                            </div>
                            <div class="form-group">
                                <label for="">Cantidad</label>
                                <input type="number" name="" id="" placeholder="0.000">
                                <select name="" id="">
                                    <option value="">kg</option>
                                    <option value="">lt</option>
                                    <option value="">pza</option>
                                </select>
                            </div>
                            <div class="container-btn">
                                <input type="submit" value="Agregar" class="btn btn-primary">
                            </div>
                        </form>
                        <div class="container-btn">
                            <button type="button" class="btn btn-alert"><i class="fas fa-window-close"></i>Salir</button>
                        </div>
                    </div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};

export const modifyIngredient = () => {
    const hijo = `<div id="resumen-0" class="form-container">
    <div class="form-login">
        <div class="form-group">
            <h4>Ingrediente</h4>
            <select name="" id="">
                <option value="">Ingrediente 1</option>
                <option value="">Ingrediente 2</option>
                <option value="">Ingrediente 3</option>
            </select>
        </div>
        <div class="container-btn">
            <button type="button" class="btn btn-primary"><i class="fas fa-database"></i>Cargar datos</button>
        </div>
    </div>
</div>
<div id="resumen-1" class="container-cards">
    <div class="form-login card">
        <h4 class="title-section">Datos actuales</h4>
        <div class="form-group">
            <label for="">Precio</label>
            <input type="number" name="" id="" disabled="true">
        </div>
        <div class="form-group">
            <label for="">Cantidad</label>
            <input type="number" name="" id="" disabled="true">
        </div>
        <div class="form-group">
            <label for="">Unidad</label>
            <input type="number" name="" id="" disabled="true">
        </div>
    </div>
    <div class="form-login card">
        <h4 class="title-section">Datos nuevos</h4>
        <div class="form-group">
            <label for="">Precio</label>
            <input type="number" name="" id="" placeholder="00.00">
        </div>
        <div class="form-group">
            <label for="">Cantidad</label>
            <input type="number" name="" id="" placeholder="0.000">
        </div>
        <div class="container-btn">
            <button type="button" class="btn btn-primary"><i class="fas fa-sync-alt"></i>Actualizar</button>
            <button type="button" class="btn btn-alert"><i class="fas fa-window-close"></i>Cancelar</button>
        </div>
    </div>
</div>
<div id="hijo-botones" class="container-btn">
    <button type="button" class="btn-salir-modify btn btn-alert"><i class="fas fa-window-close"></i>Salir</button>
</div>`;
    elementos.padreForRecipe.insertAdjacentHTML('afterbegin',hijo);
};
