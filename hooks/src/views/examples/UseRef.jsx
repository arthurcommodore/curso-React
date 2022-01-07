import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseRef = (props) => {

    const [inputValue, setInputValue] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const countR = useRef(0);
    const value = useRef(null);
    const value2 = useRef(null);

    const merge = (inputValue, inputValue2) => {
        return [...inputValue].map((e, i) => {
            return `${e}${inputValue2[i] || ""}`
        }).join("")
    }


    useEffect(function() {
        value2.current.focus()
    }, [inputValue])

    useEffect(function() {
        value.current.focus()
    }, [inputValue2])

    countR.current = countR.current + 1;
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <div className='center'>
                <div>
                    <span className="text red">Render: </span>
                    <span className="text">{merge(inputValue, inputValue2)} </span>

                    <span className="text">{countR.current}</span>
                </div>
            </div>
            <input type="text" ref={value} className="input" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <PageTitle title="#02"></PageTitle>
            <input type="text" ref={value2} className="input" value={inputValue2} onChange={e => setInputValue2(e.target.value)}/>
        </div>

    )
}

export default UseRef
