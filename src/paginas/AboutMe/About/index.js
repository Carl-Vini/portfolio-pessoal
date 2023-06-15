

import styles from'./About.module.css';


const About = () => {
    return (
        <div className={styles.about_container}>
            <img className={styles.foto} src="./foto-sobreMim.jpeg" alt='minha foto usando um boné' width={300} />
            <article>

                <p className={styles.paragrafo}>
                    Eu sou o Carlos Vinícius Bezerra Sampaio. Sou desenvolvedor Front-end. Me formei no curso de direito, porém nunca me vi trabalhando como advogado, sempre quis fazer o curso de engenharia da computação ou algo que tivesse relação com computadores, na época que cursei direito não havia faculdade de engenharia da computação na minha região.
                </p>
                <p className={styles.paragrafo}>
                    O que me fez buscar a programação foi não apenas a demanda do mercado, mas também o gosto pelo computador, mexer no computador sempre foi divertido pra mim, conteudos relacionados a computadores instigam a minha curiosidade, e acredito que eu tenha uma certa facilidade em aprender temas relacionados. Com isso me inscrevi na Alura ( A maior escola de tecnologia do Brasil), fiz vários cursos por lá e também alguns cursos extras na internet.
                </p>
                <p className={styles.paragrafo}>
                    Estudo programação há alguns meses, no momento sou desenvolvedor front-end, e tenho o intuito de me tornar um DEV full-stack no futuro, já sei bastante sobre o front. Tenho familiaridade com HTML, CSS, JavaScript, React. Meus proximos passos são avançar com o back-end, Angular e outros.
                </p>
                <p className={styles.paragrafo}>
                    Atualmente sou Desenvolvedor Front-End
                </p>
            </article>
        </div>
    )
}

export default About;