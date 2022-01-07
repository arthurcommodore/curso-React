import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    /*O Memo ele é a junção do useEffect + useState, 
    ele memoiza(faz o cache do stado), igual o use useState 
    e também monitora a alteração do estado conforme as depedencias(useEffect) */

    const result = useMemo(() => soma(n1, n2), [n1, n2]);

    function soma(n1, n2) {
        const tempo = Date.now() + 2000;
        while(Date.now() < tempo){};
        return parseInt(n1) + parseInt(n2);
    }

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <input type="number" className="input" value={n1} onChange={e => setN1(e.target.value)}/>
            <input type="number" className="input" value={n2} onChange={e => setN2(e.target.value)}/>
            <input type="number" className="input" value={null}/>
            <span className="text">{result}</span>
        </div>
    )
}

export default UseMemo
