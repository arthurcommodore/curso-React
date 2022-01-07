const FilhoProp = props => {
    const label1 = props.label1
    const label2 = props.label2

    const buttons = (
        <div>
            <button className="btn">{label1}</button>
            <button className="btn">{label2}</button>
        </div>
    )

    return (
        <div buttons={buttons}>
            <input type="number" className="input"/>
            {buttons}
        </div>
    )
}

export default FilhoProp