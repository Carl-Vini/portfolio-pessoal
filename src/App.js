import './App.css';
import Banner from './componentes/Banner/index.js';
import Destaque from './componentes/Destaque';
import Footer from './componentes/Footer';
import Projeto from './componentes/Projetos';

function App() {
  return (
    <>
      <Banner />
      <Destaque></Destaque>
      <Projeto />
      <Footer/>
    </>
  );
}

export default App;
