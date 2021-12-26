import './App.css'
import React from "react"

import Mega from "./components/megasena/Mega"
import Contador from "./components/contador/Contador"
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicao/IndiretaPai'
import DiretoPai from "./components/comunicao/DiretaPai"
import Usuario from './components/basicos/Usuario'
import If from "./components/condicional/If"
import TabelaProdutos from './components/basicos/TabelaProdutos'
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

                <Card titulo="Sorteio MegaSena">
                    <Mega></Mega>
                </Card>

                <Card titulo="Contador">
                    <Contador numeroInicial={1000} passoInicial={10}></Contador>
                </Card>

                <Card titulo="Input" color={"#F9F1F0"}>
                    <Input></Input>
                </Card>

                <Card titulo="Pai indireto" color={"#FADCD9"}>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="Pai direto" color="#F8AFA6">
                    <DiretoPai></DiretoPai>
                </Card>

                <Card titulo="Condicional" color="#F79489">
                    <If test={{nome : "joselito"}}>
                        <Usuario usuario={{nome: "manoel"}}></Usuario>
                        <Usuario usuario={{nome: "manoel"}}></Usuario>
                    </If>
                </Card>

                <Card titulo="Tabela de produtos" color={"#050A30"}>
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                
                <Card titulo='numero aleatorio' color='#080'>
                    <Aleatorio max={30} min={1}></Aleatorio>
                </Card>
                <Card titulo='Fragmento' color={"#000C66"}>
                    <Fragmento ></Fragmento>
                </Card>
                <Card titulo='Com parametro' color={"#0000FF"}>
                    <ComParametro
                        aluno='Guilherme'
                        nota={8} />
                </Card>
                <Card titulo='Primeiro' color={"#7EC8E3"}>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}
