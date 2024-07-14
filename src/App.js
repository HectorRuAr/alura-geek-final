import Header from "./Componentes/Header/Header"
import { v4 as uuid } from "uuid"
import Formulario from "./Componentes/Formulario/Formulario"
import MasProd from "./Componentes/MasProd/Index"
import { useState } from "react";
import Productos from "./Componentes/Productos/Index";
import TipoTi from "./Componentes/TipoTi/Index";
import Footer from "./Componentes/Footer/Index";
import ListaProd from "./Componentes/ListaPord";



function App() {
  
  const [mostrarFormulario,ActualizarMostrar] = useState(false)
  const [mercancias, actualizarMercancias] = useState([{
    "id": uuid(),
    "nombre":"Play Station 1",
    "precio":"350",
    "foto":"https://elcomercio.pe/resizer/KmZZr8-6jUo_QfDlz_ONaMHNb6I=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HZLWMOG5JJD5XABYLC62EPB7RI.jpg"
  },
  
  {
      "id":  uuid(),
      "nombre":"Game Cube",
      "precio":"300",
      "foto":"https://m.media-amazon.com/images/I/71ydg4MNj-L.__AC_SY300_SX300_QL70_ML2_.jpg"
    },
  
    {
      "id":  uuid(),
      "nombre":"Xbox",
      "precio":"450",
      "foto":"https://upload.wikimedia.org/wikipedia/commons/c/c2/Xbox-Console-Set.png"
    },

    {
      "id":  uuid(),
      "nombre":"Game Boy Advance",
      "precio":"120",
      "foto":"https://i5.walmartimages.com/seo/Game-Boy-Gameboy-Advance-in-Midnight-Blue_68951836-8886-4c66-a539-64dc996deaca.65d20481c35fd298651649a34efce7b1.jpeg"
    },
  
    {
      "id":  uuid(),
      "nombre":"Asuka Langly",
      "precio":"480",
      "foto":"https://pantiger.com.mx/images_store/articles/1776_asuka-shikinami-langley-neon-genesis-evangelion-super-premium-figure-sega_pantiger_16790734887571.jpg"
    }

  ])

  // Ternario --> condicion ? seMuetra : noSeMuestra
  // condicion && seMuestra
  const cambiarMostrar = () => {

     ActualizarMostrar(!mostrarFormulario)

  }

// Registro de Porudctos

const registroProducto = (regsitroMercancia) => {

console.log("Nuevo Producto", regsitroMercancia)
actualizarMercancias([... mercancias, regsitroMercancia])

}

// Eliminar Porductos
const eliminarProducto = (id) => {
  console.log("Producto Eliminado", id)
  const nuevosPorductos = mercancias.filter((mercancias) => mercancias.id !== id)
  console.log(nuevosPorductos)
  actualizarMercancias(nuevosPorductos)
}

//Lista de prodcutos
/* const productos = [

{
   nombre: "Porductos",
   colorPrimario: "#2C1D66",
   colorSecundario: "#8c75e4"
}
]
*/





  
 // .filter( mercancia => mercancia.productos === productos.tipo ) 
 // 
  
  return (
    <div>

      <Header/>
      { mostrarFormulario === true ? <Formulario registroProducto={registroProducto} /> : <></> }
      { /* mostrarFormulario && <Formulario/> */}
      <MasProd cambiarMostrar={cambiarMostrar} />
      <TipoTi/>
      
     <Productos mercancias={mercancias} eliminarProducto={eliminarProducto} />
      
    
     <Footer/>
     
    </div>
  );
}

export default App;
