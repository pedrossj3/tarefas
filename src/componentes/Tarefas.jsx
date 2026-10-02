import "../App.css"
import TarefaForm from "./TarefaForm";
import TarefaList from "./TarefasList";

function Tarefas (){
    return (
        <div className="tarefas">
            <TarefaForm></TarefaForm>
            <TarefaList></TarefaList>
        </div>
    )
}

export default Tarefas;