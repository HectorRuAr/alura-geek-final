import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

const [valor, actualisarValor] = useState("")


const manejarCambio = (e) => {
    props.actualisarValor(e.target.value)

    }

    
return <div className="campo-texto">

<input placeholder={ props.titulo } 
required  
value={props.valor} 
onChange={manejarCambio} />


</div>

}

export default CampoTexto