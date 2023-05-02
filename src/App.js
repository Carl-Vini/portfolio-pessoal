import './App.css';
import Banner from './componentes/Banner/index.js';
import Destaque from './componentes/Destaque';
import Projeto from './componentes/Projetos';

function App() {
  return (
    <>
      <Banner />
      <Destaque></Destaque>
      <Projeto />
    </>
  );
}

export default App;
