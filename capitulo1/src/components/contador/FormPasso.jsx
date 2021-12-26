export default props => {
    return (
        <>
            <label htmlFor="passoInput"></label>
            <input id="passoInput" type="number" onChange={event => props.onPasso(+event.target.value)}/>
        </>
    )
}