import styled from "styled-components"
import Link from "next/link"
import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/tipografy/H1"
import H2 from "../src/components/tipografy/H2"
import H4 from "../src/components/tipografy/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"


const FormContainer = styled.div `
  margin-top: 60px;
` 

const Form = styled.form `
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p `
  text-align: center;
`

function LoginPage(){
  return(
    <ImageWithSpace>
      <H1># socialDev</H1>
      <H4>Tudo que acontece no mundo dev esta aqui</H4>
      <FormContainer>     
        <H2>Entre em sua conta</H2>
        <Form>          
          <Input label="Email ou usuario" type="email"></Input>
          <Input label="Senha" type="password" />
          <Button>Entrar</Button>
        </Form>
        <Text>Não possui uma conta?<Link href="/Signup">Faça seu cadastro</Link></Text>
      </FormContainer>        
    </ImageWithSpace>
  )
}

export default LoginPage