export default props => {
    const {usuario} = props
    return (
        <>
            <h1>{usuario.nome}</h1>
        </>
    )
}