import "../App.css"

function TarefaForm () {
    return (
        <form className="tarefa-form">
            <input placeholder="Adicionar tarefa"/>
            <button className="btn-adicionar">Adicionar tarefa</button>
        </form>
    )
}

export default TarefaForm;