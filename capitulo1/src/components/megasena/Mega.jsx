
import { useState } from "react";
import sorteio from "./sorteio"
import "./Sorteio.css"

export default props => {
    const numeros = sorteio(1, 60, 12);

    return (
        <div className="Sorteio">
            {numeros.map(numero => {
                return (
                    <span>{numero}</span>
                )
            })}
        </div>
    )
}