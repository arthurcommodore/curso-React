import React, {useState} from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props => {
    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false)

    function fornecerInfo(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <>
            <div style={{display: "block", height: "20px"}}>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? "É nerd" : "Não é nerd    "}</span>
            </div>
            <IndiretaFilho quandoClickar={fornecerInfo}></IndiretaFilho>
        </>
    )
}