import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num);
    if(n < 0) return -1;
    if(n === 0) return 1;
    return calcFatorial(n -1) * n;
}

function getPar(number) {
    return number % 2 === 0 ? "par" : "impar"
}

const UseEffect = (props) => {
    
    const [number, setNumber] = useState(0);
    const [fatorial, setFatorial] = useState(0);
    const [par, setPar] = useState("");

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        setPar(getPar(number));
    }, [number])

    return (
        <div className="UseEffect">
            <SectionTitle title="Exercício #01"></SectionTitle>
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div className=''>
                    <span className='text red'>Fatorial: </span>
                    <span className='text'>{fatorial}</span>
                </div>
                <input className="input" type="number" value={number}
                onChange={e => setNumber(e.target.value)} />
                <span>{par}</span>
            </div>
            <SectionTitle title="Exercício #02"></SectionTitle>
        </div>
    )
}

export default UseEffect
