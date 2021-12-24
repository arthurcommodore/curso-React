export default props => {
    return (<>
        <h1>{props.nome} tem {props.idade} anos {props.nerd ? "É Nerd" : "Não é Nerd"}</h1>
    </>)
}