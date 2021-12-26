import "./Input.css"
import React from "react";
import { useState } from "react/cjs/react.development";



export default props => {
    const [valor, setValor] = useState('Iniciando')

    function change(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <input value={valor} onChange={e => change(e)}/>
                <input value={valor} readOnly/>
                <input value={undefined}/>
                <input/>
            </div>
            
        </div>
    )
}