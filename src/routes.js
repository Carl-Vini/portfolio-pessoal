import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './componentes/Banner';
import Home from './paginas/Home';
import About from './paginas/AboutMe/About';
import Footer from './componentes/Footer';



function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />}/>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default RoutesApp;
