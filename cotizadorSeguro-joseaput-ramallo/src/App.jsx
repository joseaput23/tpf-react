import Formulario from "./components/Formulario"
import ModalResultado from "./components/ModalResultado"
import useCotizador from "./hooks/useCotizador"

function App() {

  const {modal} = useCotizador()
  
  return (
    <>
      <h1>
        Cotizador de Seguros
      </h1>
      <main className="container">
        <Formulario />
        {
          modal && <ModalResultado />
        }
      </main>
    </>
  )
}

export default App
