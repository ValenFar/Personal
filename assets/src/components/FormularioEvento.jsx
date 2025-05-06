import React, { useState } from 'react'

const FormularioEvento = ({ Agregar }) => {
    const [titulo, setTitulo] = useState('')

    const Enviar = (e) => {
        e.preventDefault()// No reiniciamos el estado del input
        if (!titulo.trim()) return // No se permite agregar un evento vacío
        Agregar({ titulo }) 
        setTitulo('') // !!!!! NUEVA LÍNEA: Limpiamos el input después de agregar el evento
    }

    return (
        <form className="formulario-evento" onSubmit={Enviar}>
            <input
                type="text"
                placeholder="Nuevo evento..."
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default FormularioEvento;