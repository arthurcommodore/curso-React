import React, { cloneElement } from "react";

export default props => {
    const usuarios = <div> {
        props.children.map((child, i) => {
            return cloneElement(child, {...props, key: i})
        })
    }</div>
    if(props.test.nome === "joselito") {
        return (
            <>
                {usuarios}
            </>
        )
    }else {
        return <h1>Condicional não aceita</h1>
    }
}