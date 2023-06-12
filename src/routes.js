import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './componentes/Banner';
import Home from './paginas/Home';



function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default RoutesApp;
