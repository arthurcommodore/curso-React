import './App.css'
import React from "react"

import Card from "./components/basicos/layout/Card"
import Aleatorio from "./components/basicos/Aleatorio"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


export default function () {
    return (
        <div className='app'>
            <h1>Fundamentos React</h1>
            <div className="cards">
                <Card titulo='numero aleatorio' color='#080'>
                    <Aleatorio max={30} min={1}></Aleatorio>
                </Card>
                <Card titulo='Fragmento'>
                    <Fragmento ></Fragmento>
                </Card>
                <Card titulo='Com parametro'>
                    <ComParametro
                        aluno='Guilherme'
                        nota={8} />
                </Card>
                <Card titulo='Primeiro'>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}
