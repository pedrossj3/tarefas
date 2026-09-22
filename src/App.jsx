import "./App.css";
import Sidebar from "./componentes/Sidebar";

function App() {
  return (
    <div>
      <header>
        <h1>Tarefas App</h1>
      </header>
      <div className="container-do-conteudo">
        <Sidebar />
        <section className="conteudo-principal">
          <h1>Tarefas</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
