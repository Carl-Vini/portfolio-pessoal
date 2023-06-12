import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './componentes/Banner';
import Home from './paginas/Home';
import About from './paginas/AboutMe/About';



function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />}/>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default RoutesApp;
