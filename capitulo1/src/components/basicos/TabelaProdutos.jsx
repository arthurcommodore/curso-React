import produtos from "../repeticao/produtos"

console.log(produtos)
export default props => {
    const produtosFilter = produtos.map((produto, i) => {
        return (
            <tr key={i}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosFilter}
                </tbody>
                
            </table>
        </>
    )
}