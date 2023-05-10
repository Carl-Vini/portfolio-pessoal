import { useState } from 'react';
import './Banner.css';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';

const Banner = (props) => {


    const [exibirOpcoes, setExibirOpcoes] = useState(false)

    const hideNav = () => {
        setExibirOpcoes(!exibirOpcoes)
    }

    return (
        <header>
            {/* <img src='foto.png' alt='foto do Carlos' /> */}
            <FaBars className='botao-exibir' onClick={hideNav} fontSize={25} />

            {exibirOpcoes && (
                <nav>
                  <h2>Home</h2>   
                   <h2>About Me</h2>
                </nav>
            )
            }

        </header>
    )
}

export default Banner;