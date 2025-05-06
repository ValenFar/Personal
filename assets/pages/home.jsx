import React from 'react';
import FormularioEvento from "../src/components/FormularioEvento";


function Inicio({ eventos, setEventos }) {
    return (
        <div className="contenedor-inicio">
            <h1>Gestor de Eventos</h1>
            <FormularioEvento Agregar={(evento) => setEventos([...eventos, { ...evento, id: Date.now(), completado: false }])} />
            <ListaElementos eventos={eventos} setEventos={setEventos} />
        </div>
    );
}

