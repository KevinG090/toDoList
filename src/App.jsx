import { useState, useEffect } from 'react'
import './App.css'
import ContenedorTareas from './components/ContenedorTareas'
import CreadorDeTareas from './components/CreadorDeTareas'

function App() {

  const [articuloTareas, setArticuloTareas] = useState([])
    // { nombre: 'kevin', done: false },
    // { nombre: 'david', done: false },
    // { nombre: 'juan', done: false },
  

  const creadorTareas = (nombreTarea) => {
    if (!articuloTareas.find(tarea => tarea.nombre === nombreTarea)) {
      setArticuloTareas([...articuloTareas, { nombre: `${nombreTarea}`, done: false , write:false, eliminacion:false}])
    }
  }

  const cambiarEstadoTarea = (tarea) => {
    setArticuloTareas(articuloTareas.map(t => (t.nombre == tarea.nombre) ? {...t,done:!t.done}:t ))
  }
  // const cambiarEstadoEscritura = (tarea) => {
  //   setArticuloTareas(articuloTareas.map(t => (t.nombre == tarea.nombre) ? {articuloTareas.splice(x,1)}))
  // }
  const cambiarEstadoEscritura = (tarea) => {
    setArticuloTareas(articuloTareas.map(t => (t.nombre == tarea.nombre) ? {...t,write:!t.write}:t ))
  }
  const eliminar = (data) => {
    let result = articuloTareas.filter(item => {
      // console.log(item)
      if (item.nombre === data.nombre){
        return data
      }
    })
    setArticuloTareas(articuloTareas.filter(item => !result.includes(item)))
    // setArticuloTareas(articuloTareas.map(t => (t.nombre == tarea.nombre) ? {...t,eliminacion:!t.eliminacion}:t ))
  }
  const borrarTodo = () => {
    setArticuloTareas([])
    
  }
 


  useEffect(() => {
    let data = localStorage.getItem('Tareas')
    if (data){
      setArticuloTareas(JSON.parse(data))
    }
  },[])

  useEffect(() => {
    localStorage.setItem("Tareas",JSON.stringify(articuloTareas))
  },[articuloTareas])

  return (
    <div className="App">
      <h1>Lista De Tareas</h1>
      <div>
        <CreadorDeTareas creadorTareas={creadorTareas} borrarTodo={borrarTodo} />
        <table>
            <thead>
              <tr>
                <th> Tarea</th>
                <th> Estado </th>
                <th> Editar </th>
                <th> Eliminar</th>
              </tr>
            </thead>
              <ContenedorTareas articuloTareas={articuloTareas} cambiarEstadoTarea={cambiarEstadoTarea} cambiarEstadoEscritura={cambiarEstadoEscritura} eliminar={eliminar}/>
        </table>
      </div>
    </div>
  )
}

export default App
