
const FilaTareas = ({tarea,cambiarEstadoTarea, cambiarEstadoEscritura,eliminar }) => {

  return (
    <tr className={tarea.eliminacion == false ? "noDelete ": "delete" }>
        <td >
            <input type="text" 
            className={`${tarea.done == false ? "didnt": "done" } ${tarea.write == false ? "inputReadOnly" : "inputEditable"}`}
            defaultValue={tarea.nombre} 
            />
        </td>
        <td>
            <input type="checkbox" 
            checked={tarea.done} 
            onChange={()=>{cambiarEstadoTarea(tarea)}}
            />
        </td>
        <td>
            <input type="checkbox" 
            className={"inputNoEdit"}
            checked={tarea.write} 
            onChange={()=>{cambiarEstadoEscritura(tarea)}}
            />
        </td>
        <td>
            <input type="checkbox"
            checked={tarea.eliminacion} 
            onChange={()=>{eliminar(tarea)}}
            />
        </td>
    </tr>
  )
}

export default FilaTareas