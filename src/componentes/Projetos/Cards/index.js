import './Cards.css'

const Card = (props) => {
    return (
        <section className='card'>
            <h2>Nome do Projeto</h2>
            <img src='./projeto-1.png' alt='imagem do Projeto' width={100}/>
            <h3>Descriçao do Projeto</h3>
        </section>
    )
}

export default Card;