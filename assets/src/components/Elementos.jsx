import React, { useState } from 'react'

const Elementos = ({ evento, Eliminar, Alternar, Editar }) => {
    const [Editando, setEditando] = useState(false)
    const [nuevoTitulo, setNuevoTitulo] = useState(evento.titulo)

    const manejarEdicion = () => {
        if (Editando) {
            // Validar que el nuevo título no esté vacío
            if (nuevoTitulo.trim() === '') {
                alert('El título no puede estar vacío.')
                return
            }
            Editar(evento.id, { titulo: nuevoTitulo })
        }
        setEditando(!Editando)
    }

    return (
        <div className={`elemento-evento ${evento.completado ? 'completado' : ''}`}>
            {Editando ? (
                <input
                    type="text"
                    value={nuevoTitulo}
                    onChange={(e) => setNuevoTitulo(e.target.value)}
                />
            ) : (
                <span>{evento.titulo}</span>
            )}
            <div className="acciones">
                <button onClick={() => Alternar(evento.id)}>
                    {evento.completado ? 'Desmarcar' : 'Completar'}
                </button>
                <button onClick={manejarEdicion}>
                    {Editando ? 'Guardar' : 'Editar'}
                </button>
                <button onClick={() => Eliminar(evento.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Elementos