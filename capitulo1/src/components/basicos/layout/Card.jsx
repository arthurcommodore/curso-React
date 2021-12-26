import React from "react";

import './Card.css'

export default propos => {
    const estilo = {
        backgroundColor: propos.color || '#F00',
        borderColor: propos.color || '#F00'
    }
    return (
        <div className="card" style={estilo}>
            <div className="title">{propos.titulo}</div>
            <div className="content">
                {propos.children}
            </div>
        </div>
    )
}