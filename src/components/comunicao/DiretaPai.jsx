import DiretaFilho from "./DiretaFilho"

export default props => {
    return (<div>
        <DiretaFilho nome="Junior" idade={40} nerd={false}></DiretaFilho>
        <DiretaFilho nome="Ale" idade={50} nerd={true}></DiretaFilho>
    </div>)
}