import { useState} from 'react'


const CreadorDeTareas = ({ creadorTareas , borrarTodo }) => {

    const [contTarea, setContTarea] = useState('')

    const obtenerValorTarea = (e) => {
        e.preventDefault()
        creadorTareas(contTarea)
        setContTarea('')

        console.log(contTarea)
    }

    return (
        <div className='CreadorDeTareas'>
            <form onSubmit={obtenerValorTarea}>
                <input type="text" onChange={e => setContTarea(e.target.value)} value={contTarea} placeholder='Nombre de la tarea' />
                <button>Crear</button>
            </form>
            <button onClick={e=>borrarTodo(e,"")}>Borrar Todo</button>
        </div>
    )
}

export default CreadorDeTareas