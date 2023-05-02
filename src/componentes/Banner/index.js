import './Banner.css';
import { FaBars } from 'react-icons/fa'

const Banner = (props) => {

    const hideNav = () => {
        
    }

    return (
        <header>
            {/* <img src='foto.png' alt='foto do Carlos' /> */}
            <FaBars onClick={hideNav} fontSize={25} color='#1C86EE' cursor='pointer'/>
            <nav>
                <h2>Home</h2>
                <h2>About Me</h2>
                <h2>Projetos</h2>
            </nav>


        </header>
    )
}

export default Banner;