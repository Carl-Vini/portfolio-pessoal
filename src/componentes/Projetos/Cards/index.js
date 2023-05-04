import './Cards.css'

const Card = (props) => {
    return (



        <section className='card'>
            <a href={props.href} >
                <img src={props.src} alt='imagem do Projeto' width={260} height={180} />
            </a >
            <h2 >{props.nome}</h2>
            <h3>{props.descricao}</h3>

        </section>
    )
}

export default Card;