
import AulaProps from "./pages/01_props/AulaProps";
import Team from "./pages/02_class_component/Team";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React</h1>
        <hr/>
        <AulaProps title='Aula Props Test' subtitle='Subtitulo da aula' textcomponent='Texto do componente'/>
        <hr/>
        <Team teamName='Team name' numMembers='12'/>
      </header>


    </div>
  );
}

export default App;
