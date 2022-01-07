import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {reducers, initialState, numberAdd2, user} from "../../store"

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducers, initialState);


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {
                    state.user ?
                        <span className="text">{state.user.name}</span>
                        : <span className="text">Sem usuário</span>
                }

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => user(dispatch)}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
