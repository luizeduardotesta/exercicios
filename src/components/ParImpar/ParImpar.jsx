export function ParImpar(props) {
    const { numero } = props

    if (numero % 2 === 0) {
        return <div>par</div>
    } else {
        return <div>impar</div>
    }
}