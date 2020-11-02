import React, { useState } from 'react';

const Fomulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    //state del formulario

    // extraer ciudad y pais
    const { ciudad, pais } = busqueda;
    // controlar el error
    const [error, guardarError] = useState(false);

    //function que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    //cuando el usuario da submit
    const handleSubmit = e => {
        e.preventDefault();
        //validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
        } else {
            guardarError(false);
            //pasar al componente principal
            guardarConsultar(true);

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            {error ? <p className="red darken-4 error">Todos los campos son obligarios</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">--Seleccione un pais--</option>
                    <option value="CL">Chile</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>
            <button type="submit" className="btn btn-light btn-lg btn-block">Buscar Clima</button>
        </form>
    );
}

export default Fomulario;