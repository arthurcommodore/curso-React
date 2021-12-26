 export default function sorteio(min, max, qtds, arrayParam) {
    const array = arrayParam || [];
    sortResult(min, max, qtds, array)
    
    return qtds === array.length ? array : sorteio(min, max, qtds, array)
}


function sortResult(min, max, qtds, array) {
    const sortResult = () => Math.floor((Math.random() * (max - min)) + min)
    const addResult = num => {
        array.push(num)
        return array
    }
    return !array.includes(sortResult()) ? addResult(sortResult()) : sortResult(min, max, qtds, array)
}
