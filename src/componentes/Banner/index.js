import { useState } from 'react';
import './Banner.css';
import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';


const Banner = ({to}) => {


    const [exibirOpcoes, setExibirOpcoes] = useState(false)

    const localizacao = useLocation();

    const hideNav = () => {
        setExibirOpcoes(!exibirOpcoes)
    }

    return (
        <header>
            {/* <img src='foto.png' alt='foto do Carlos' /> */}
            <FaBars className='botao-exibir' onClick={hideNav} fontSize={25} />

            {exibirOpcoes && (
                <nav>
                    <Link className={`link ${localizacao.pathname === "/" ? 'link-active' : ""} `} to="/">
                        <h2 onClick={hideNav}>Home</h2>
                    </Link>
                    <Link className={`link ${localizacao.pathname === "/aboutme" ? 'link-active' : ""} `} to="/aboutme">
                        <h2 onClick={hideNav}>About Me</h2>
                    </Link>

                </nav>
            )
            }

        </header>
    )
}

export default Banner;