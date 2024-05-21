import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize: string
}

const Button = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Button fontSize="18px" principal>
        Enviar
      </Button>
      <Button fontSize="14px" principal={false}>
        Cancelar
      </Button>
      <BotaoPerigo as="a" principal fontSize="20px">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}
