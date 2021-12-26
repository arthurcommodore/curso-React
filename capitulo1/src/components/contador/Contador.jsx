
import FormPasso from "./FormPasso";
import Buttons from "./Buttons"
import "./Contador.css"
import React, {Component} from "react"

class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial  || 0,
        passo: this.props.passoInicial || 5
    };


    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
            passo: this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo 
        });
    }

    setPasso = (value) => {
        this.setState({
            passo: value
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>{this.state.numero}</h2>
                <FormPasso onPasso={this.setPasso}></FormPasso>
                <Buttons onDec={this.dec} onInc={this.inc}></Buttons>
            </div>
        )
    }    
}

export default Contador