import "../App.css"
import { RadioButtonChecked, Star, Delete } from "@mui/icons-material"

function TarefaList(){
    let ListaDeTarefas = ["Fazer tarefa", "Estudar programacão", "Estudar"]

    return (
        <ul className="tarefas-lista">
            {
                ListaDeTarefas.map((tarefaDaVez) => {
                    return (
                    <li className="tarefa-unica">
                        <section className="texto-tarefa">
                            <RadioButtonChecked></RadioButtonChecked>
                            <span>{tarefaDaVez}</span>
                        </section>
                        <section className="acoes">
                            <div><Star></Star></div>
                            <div><Delete></Delete></div>    
                        </section>            
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default TarefaList;