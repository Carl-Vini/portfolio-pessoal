import './Destaque.css';

const Destaque = () => {
    return (
        <div className='destaque'>

            <img src='foto-principal.jpg' alt='foto em destaque' width={400} />
            <div className='descricao'>
                <h1>Bem Vindo!</h1>
                {/* <h3>Desenvolvedor Front-End</h3> */}
                <div className='descricao-texto'>
                <p>
                    Meu nome é Carlos Vinícius, sou desenvolvedor front-end apaixonado por tecnologia e habilidoso em HTML, CSS, JavaScript e React.js. Meu site de portfolio reflete minha paixão e habilidade em criar experiências de usuário envolventes e impressionantes.
                </p>
                </div>
                
            </div>

        </div>
    )
}



export default Destaque; 