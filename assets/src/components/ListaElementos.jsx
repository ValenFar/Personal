import React from 'react'
import Elementos from './Elementos'

const ListaElementos = ({ eventos, completarEvento, editarEvento, eliminarEvento }) => {
    return (
        <div className="lista-eventos">
            {eventos.length > 0 ? (
                eventos.map((evento) => (
                    <Elementos
                        key={evento.id}
                        evento={evento}
                        Alternar={completarEvento}
                        Editar={editarEvento}
                        Eliminar={eliminarEvento}
                    />
                ))
            ) : (
                <p class="parrafo-formulario">No hay eventos disponibles. ¡Agrega uno!</p>
            )}
        </div>
    )
}

export default ListaElementos;