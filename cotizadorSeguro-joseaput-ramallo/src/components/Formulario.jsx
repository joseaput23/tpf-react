import { Fragment } from "react"
import { AÑOS, MARCAS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()

    const validarFormulario = (e) => {

        e.preventDefault()

        if (Object.values(datos).includes('')) {

            return setError('Debes completar todos los campos')

        }

        setError('')

        cotizarSeguro()

    }

  return (
    <form
        onSubmit={validarFormulario}
    >
        {
            error && <Error />
        }
        <div className="campo">
            <label>
                Marca Vehiculo
            </label>
            <select 
                name="marca"
                value={datos.marca}
                onChange={handleChangeDatos}
            >
                <option value="">-- Seleccione una marca --</option>
                {
                    MARCAS.map(marca => (

                        <option 
                            value={marca.id}
                            key={marca.id}
                        >
                            {marca.nombre}
                        </option>

                    ))
                }
            </select>
        </div>
        <div className="campo">
            <label>
                Año de Fabricación 
            </label>
            <select 
                name="año"
                value={datos.año}
                onChange={handleChangeDatos}
            >
                <option value="">-- Seleccione un año --</option>
                {
                    AÑOS.map(año => (

                        <option 
                            key={año}
                        >
                            {año}
                        </option>

                    ))
                }
            </select>
        </div>
        <div className="campo">
            <label>
                Tipo de Plan de Cobertura
            </label>
            <select 
                name="plan"
                value={datos.plan}
                onChange={handleChangeDatos}
            >
                <option value="">-- Seleccione un tipo de Plan --</option>
                {
                    PLANES.map(plan => (

                        <option 
                            key={plan.id}
                            value={plan.id}
                        >
                            {plan.nombre}
                        </option>

                    ))
                }
            </select>
        </div>
        <input
            className="button"
            type="submit"
            value='Enviar'
        />
    </form>
  )
}

export default Formulario
