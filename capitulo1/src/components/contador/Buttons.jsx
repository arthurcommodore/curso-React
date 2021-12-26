export default props => {
    return (
        <div className="buttons">
            <button onClick={props.onInc}>+</button>
            <button onClick={props.onDec}>-</button>
        </div>
    )
}