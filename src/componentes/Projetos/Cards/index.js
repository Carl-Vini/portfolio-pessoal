import './Cards.css'

const Card = (props) => {
    return (

        <a href={props.href} >
            <section className='card'>
                <img src={props.src} alt='imagem do Projeto' width={260} height={180} />
                <h2>{props.nome}</h2>
                <h3>{props.descricao}</h3>
            </section>
        </a>

    )
}

export default Card;