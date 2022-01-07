import React, { useContext, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext, {data} from '../../data/DataContext'

class  UseContext extends React.Component {
    render() {
        return (
            <div className="UseContext">
                <PageTitle
                    title="Hook UseContext"
                    subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
                />
                <span>{this.context.text}</span>
                <span>"etes"</span>
            </div>
        )
    }
}
UseContext.contextType = DataContext
export default UseContext
