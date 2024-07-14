import { useState } from "react"
import "./MasProd.css"

const MasProd = (props) => {

//ejemplo de useState const [nombreVariable, funcionActualiza] = useState(valorInicial)
/*const [mostrar,actualizarMostrar] = useState(true)
    const manejarClick = ()  => {
        console.log("Mostrar/Ocultar elemento")
        actualizarMostrar(!mostrar)
    }
*/

return <section className="BotonAgregar">
    <h3> Agregar Productos </h3>
    <img src="/img/circle1371.png" alt="Imagen de Cofre" onClick={props.cambiarMostrar} />
</section>

}

export default MasProd