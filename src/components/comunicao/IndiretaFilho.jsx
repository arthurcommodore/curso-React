export default props => {
    const cb = props.quandoClickar;
    const gerarIdade = () => parseInt(Math.random() * 20) + 50;
    const gerarNerd = () => Math.random() > 0.5

    return (
        <>
            <button style={{width: "2rem", margin: "10px", padding:"10px"}} onClick={_ => cb("João", gerarIdade(), gerarNerd())}></button>
        </>
    )
}