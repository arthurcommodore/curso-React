import React from "react";

export default function ComParametro(props){
    const passou = props.nota >= 7 ? 'passou' : 'reprovou'
    return (
        <div>
            <h2>{props.aluno}</h2>
            <h3>{passou} com a nota {props.nota}</h3>
        </div>
    )
}