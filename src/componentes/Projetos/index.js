import Card from './Cards';
import './Projetos.css'

const Projeto = (props) => {
    return (<>
        <div className='titulo'>
            <h1 >Projetos</h1>
        </div>
        <div className='local-card'>
            <Card />
        </div>
    </>
    )
}

export default Projeto; 