import FilaTareas from "./FilaTareas"

const ContenedorTareas = ({articuloTareas,cambiarEstadoTarea, cambiarEstadoEscritura,eliminar}) => {
  return (
    <tbody className='contenedor'>
    {
      articuloTareas.map(tarea => (
        <FilaTareas tarea={tarea} cambiarEstadoTarea={cambiarEstadoTarea} cambiarEstadoEscritura={cambiarEstadoEscritura} eliminar={eliminar} key={tarea.nombre}/>
      ))
    }
  </tbody>
  )
}

export default ContenedorTareas