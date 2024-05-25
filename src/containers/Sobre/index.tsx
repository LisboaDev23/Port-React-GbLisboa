import Paragrafo from "../../components/Paragrafo";
import Tittle from "../../components/Tittle";
import { GithubSecao } from "./styles";

const Sobre = () => (
    <section>
      <Tittle fontSize={16}>Sobre mim</Tittle>
      <Paragrafo tipo="secundario">
        Estudante de Engenharia de Software, amante e constante apreciador da tecnologia em todos os seus aspectos.
        Observe alguns dos meus principais projetos realizados durante o meu interminável ciclo de estudo com
        programação back-end e front-end. Espero que goste :)
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LisboaDev23&layout=compact&langs_count=7&theme=dracula"/>
      </GithubSecao>
    </section>
)

export default Sobre
