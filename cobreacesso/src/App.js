import logo from './logo.svg';
import CadastroMotorista from './componentes/CadastroMotorista';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>COBREACESSO</h1>
      </header>
      <CadastroMotorista texto={'testando props'}/>
    </div>
  );
}

export default App;
