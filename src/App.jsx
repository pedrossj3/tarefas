import "./App.css";
import Sidebar from "./componentes/Sidebar";
import Tarefas from "./componentes/Tarefas";
import { CheckCircle } from "@mui/icons-material";
function App() {
  return (
    <>
      <header>
        <h1>Tarefas App</h1>
        <CheckCircle></CheckCircle>
      </header>
      <div className="container-do-conteudo">
        <Sidebar />
        <section className="conteudo-principal">
          <Tarefas></Tarefas>
        </section>
      </div>
    </>
  );
}

export default App;
