import "./ListaAlunos.css"

const alunos = [
    {
        cod: 1,
        nome: "Luiz",
        dataDeNascimento: "04/06/1986",
        nota: 10,
        telefone: "(00) 00000-0000"
    },
    {
        cod: 2,
        nome: "Angel",
        dataDeNascimento: "09/09/2000",
        nota: 6,
        telefone: "(00) 00000-0000"
    },
    {
        cod: 3,
        nome: "Gregory",
        dataDeNascimento: "27/12/2021",
        nota: 8,
        telefone: "(00) 00000-0000"
    },
    {
        cod: 4,
        nome: "Luna",
        dataDeNascimento: "04/06/2012",
        nota: 3,
        telefone: "(00) 00000-0000"
    }
]

export function ListaAlunos() {
    const listaDeAlunos = alunos.map((aluno) => {

        let aprovado;
        let borderColor = "black";

        if (aluno.nota >= 7) {
            borderColor = "green";
            aprovado = true;
        }
        else if (aluno.nota < 7) {
            borderColor = "red";
            aprovado = false;
        }
        const objectStyle = { borderColor };


        return (
            <div key={aluno.cod} className="card-alunos" style={objectStyle}>
                <h2>{aluno.nome}</h2>
                <p>Data de nascimento: {aluno.dataDeNascimento}</p>
                {aprovado ? <div>Aprovado!</div> : <div>Reprovado!</div>}
                {aprovado && <p>Nota: {aluno.nota}</p>}
                {!aprovado && <p>Estude mais para a proxima prova</p>}
                <p>Telefone: {aluno.telefone}</p>
            </div>
        );
    })

    return (
        <>
            <h2>Lista de notas</h2>
            <ul>{listaDeAlunos}</ul>
        </>
    );
}
