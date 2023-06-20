import { useState } from 'react';
import Card from './Cards';
import './Projetos.css'


const Projeto = (props) => {


    const [maisProjetos, setMaisProjetos] = useState(false)

    const hideProjetos = () => {
        setMaisProjetos(!maisProjetos)
    }

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
            nome: 'Info-Dev',
            descricao: 'website com informações sobre tecnologias de programação',
            id: 3,
            src: './projeto-3.png',
            href: 'https://info-dev.vercel.app'
        },
        {
            nome: 'Qr-Code',
            descricao: 'Criação de um Qr-code',
            id: 4,
            src: './projeto-4.png',
            href: 'https://qr-code-chalenge.vercel.app'
        },
        {
            nome: 'Travel Bag',
            descricao: 'Criação de uma Bolsa para incluir e remover itens',
            id: 5,
            src: './projeto-5.png',
            href: 'https://travel-bag-psi.vercel.app'
        }, 
        {
            nome: 'Robotron',
            descricao: 'Robô que pode ter estatisticas alteradas',
            id: 6,
            src: './projeto-6.png',
            href: 'https://robotron-carl-vini.vercel.app'
        }, 
        {
            nome: 'Gerador de Meme',
            descricao: 'Website que possibilita a criação de um meme',
            id: 7,
            src: './projeto-7.png',
            href: 'https://meme-generator-bay-rho.vercel.app'
        }, 
        {
            nome: 'Bateria-Virtual',
            descricao: 'MIDI com sons de Bateria',
            id: 8,
            src: './projeto-8.png',
            href: 'https://bateria-virtual-omega.vercel.app'
        }
    ]

    const novosProjetos = [
        {
                nome: 'Alura Space',
                descricao: 'Galeria de fotos espaciais',
                id: 9,
                src: './projeto-9.png',
                href: 'https://galeria-react-tau.vercel.app'
        },
    ]
    

    return (<>
        <div className='titulo'>
            <h1 >Projetos</h1>
        </div>
        <div className='botao-projetos'>
            <h2 onClick={hideProjetos}>Mostrar mais</h2>
        </div>
        <div className='local-card'>
                {maisProjetos && (
                    novosProjetos.map(projeto => <Card nome={projeto.nome} key={projeto.id} descricao={projeto.descricao} src={projeto.src} href={projeto.href} />)
                )}  
                    
                

                {projetos.map(projeto => <Card nome={projeto.nome} key={projeto.id} descricao={projeto.descricao} src={projeto.src} href={projeto.href} />)}
                {/* <Card nome={} descricao={}/> */}
        </div>
    </>
    );
}

export default Projeto; 