import "./ListaOpciones.css"
//import { useState } from "react"

const ListaOpciones = (props) => {

 //const [valor, actualisarValor] = useState("")
 // Metodo Map    map -> arreglo.map( (nombreArreglo, poscicion) => {
 // return <option> </option>      
 //})
 const manejarCambio = (e) => {
  console.log("cambio",e.target.value)
  props.actualizarTipo(e.target.value)

  }




return <div className="lista-opciones">

<label> Tipo de Porducto </label>
<select value={props.valor} onChange={manejarCambio}> 
  <option value="" disabled defaultValue="" hidden > Seleccionar Tipo </option>

{props.productos.map((productos, index) =>  <option key={index}> {productos} </option>)}

</select>


</div>

}

export default ListaOpciones