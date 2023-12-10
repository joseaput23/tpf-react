import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const {error} = useCotizador()

  return (
    <div className="container error-message">
      <p>{error}</p>
    </div>
  )
}

export default Error
