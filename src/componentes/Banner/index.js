import { useState } from 'react';
import './Banner.css';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';


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
                    <Link className='link' to="/">
                        <h2 onClick={hideNav}>Home</h2>
                    </Link>
                    <Link className='link' to="/aboutme">
                        <h2 onClick={hideNav}>About Me</h2>
                    </Link>

                </nav>
            )
            }

        </header>
    )
}

export default Banner;