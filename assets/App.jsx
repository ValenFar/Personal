import React, { useState } from 'react';
import FormularioEvento from './src/components/FormularioEvento';
import './css/index.css';

import ListaElementos from './src/components/ListaElementos';

const App = () => {
    const [eventos, setEventos] = useState([]);

    const agregarEvento = (evento) => {
        setEventos([...eventos, { ...evento, id: Date.now() }])
    }
    // Función para alternar el estado de completado de un evento
    const completarEvento = (id) => {
        setEventos(
            eventos.map((evento) =>
                evento.id === id ? { ...evento, completado: !evento.completado } : evento
            )
        )
    }
  // Función para editar un evento
    const editarEvento = (id, nuevosDatos) => {
        setEventos(
            eventos.map((evento) =>
                evento.id === id ? { ...evento, ...nuevosDatos } : evento
            )
        )
    }

    // Función para eliminar un evento
    const eliminarEvento = (id) => {
        setEventos(eventos.filter((evento) => evento.id !== id))
    }


    return (
        <div className="contenedor">
            <h1>Administrador de Tareas</h1>
            <FormularioEvento Agregar={agregarEvento} />
            <ListaElementos
                eventos={eventos}
                completarEvento={completarEvento}
                editarEvento={editarEvento}
                eliminarEvento={eliminarEvento}
            />
        </div>
        
    )
}



export default App;
