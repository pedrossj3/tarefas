import "../App.css"

function TarefaList(){
    let ListaDeTarefas = ["Fazer tarefa", "Estudar programacão", "Estudar"]

    return (
        <ul>
            {
                ListaDeTarefas.map((tarefaDaVez) => {
                    return <li>{tarefaDaVez}</li>
                })
            }
        </ul>
    )
}

export default TarefaList;