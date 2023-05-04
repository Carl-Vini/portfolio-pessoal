import Card from './Cards';
import './Projetos.css'

const Projeto = (props) => {

    const projetos = [
        {
            nome: 'Organograma',
            descricao: 'Website para organizar equipes',
            id: 1,
            src: './projeto-1.png',
            href: 'https://projeto-organograma.vercel.app'
        },
        {
            nome: 'Life-Counter',
            descricao: 'Contador de vidas - Magic the Gathering',
            id: 2,
            src: './projeto-2.png',
            href: 'https://life-counter-beta.vercel.app'
        },
        {
            nome: 'Organograma',
            descricao: 'Website para organizar equipes',
            id: 1,
            src: './projeto-1.png',
            href: 'https://projeto-organograma.vercel.app'
        },
        {
            nome: 'Organograma',
            descricao: 'Website para organizar equipes',
            id: 1,
            src: './projeto-1.png',
            href: 'https://projeto-organograma.vercel.app'
        }
    ]

    return (<>
        <div className='titulo'>
            <h1 >Projetos</h1>
        </div>
        <div className='local-card'>
            {projetos.map(projeto => <Card nome={projeto.nome} key={projeto.id} descricao={projeto.descricao} src={projeto.src} href={projeto.href}/>)}
            {/* <Card nome={} descricao={}/> */}
        </div>
    </>
    )
}

export default Projeto; 