import "./App.css";
import Sidebar from "./componentes/Sidebar";
import Tarefas from "./componentes/Tarefas";

function App() {
  return (
    <div>
      <header>
        <h1>Tarefas App</h1>
      </header>
      <div className="container-do-conteudo">
        <Sidebar />
        <section className="conteudo-principal">
          <Tarefas></Tarefas>
        </section>
      </div>
    </div>
  );
}

export default App;
