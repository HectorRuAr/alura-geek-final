import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import Boton from "../Boton/Index"
import { v4 as uuid } from "uuid"
// import ListaOpciones from "../ListaOpciones/Index"



const Formulario = (props) => {

  const [nombre, actualizarNombre] = useState("")
  const [precio, actualizarPrecio] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [id , actualizarId] = useState( uuid())
 // const [tipo, actualizarTipo] = useState("")

 const limpiarFormulario = () => {
  actualizarNombre('');
  actualizarPrecio('');
  actualizarFoto('');
  actualizarId('');
};

  const manejarEnvio = (e) => {
    e.preventDefault()
  let datosAEnviar = {
             id: id,
         nombre: nombre,
         precio: precio,
         foto: foto
       //  tipo: tipo
      
  }

  limpiarFormulario()

  props.registroProducto(datosAEnviar)
  
}  
    return <section className="formulario">
        
        <form onSubmit={manejarEnvio} >
   <h2>
    AGREGAR 
   </h2>
   <h2> 
   PRODUCTO:
   </h2>

<CampoTexto 
titulo=" Nombre..." 
valor={nombre} 
actualisarValor={actualizarNombre} />
<CampoTexto 
titulo=" Precio..."
valor={precio} 
actualisarValor={actualizarPrecio} />
<CampoTexto 
titulo=" Foto..."
valor={foto} 
actualisarValor={actualizarFoto} />
 

   <div className="contenedorBotones">

   <Boton titulo="Enviar" />
  

   </div>

        </form>

         </section>
}

export default Formulario