import Paragrafo from "../Paragrafo";
import Tittle from "../Tittle";
import {Card, LinkBotao} from "./styled";


const Projeto = () => (
  <Card>
    <Tittle>Projeto Escola - Banco de Dados com JPA e Testes com JUnit</Tittle>
    <Paragrafo tipo="secundario">
      Sistema CRUD de uma simulação de uma escola de cursos, trabalhando
      com entidades de Cliente-Aluno, Curso e Matrícula. Utilzei JPA para
      efetuar a manipulação dos dados e a biblioteca JUnit para implementação
      de testes. Este projeto consta apenas a camada back-end, logo só está
      disponibilizado o seu código-fonte no GitHub.
    </Paragrafo>
    <LinkBotao>Código-Fonte</LinkBotao>
  </Card>
)

export default Projeto
