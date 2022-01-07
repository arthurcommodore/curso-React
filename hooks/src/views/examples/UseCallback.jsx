import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from "./UseCallbackButtons"

const UseCallback = (props) => {
    let [value, setValue] = useState(0)

    console.log("render pai")

    const inc = useCallback(function (num) {
        setValue(curr => curr + num)
    }, [setValue])



    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <input type="number" className="input" value={value} onChange={e => setValue(e.target.value)} />
            <UseCallbackButtons inc={inc}/>
        </div>
    )
}

export default UseCallback
