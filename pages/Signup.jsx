import { useState } from "react"
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

function SignupPage(){
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [user,setUser] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleName = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastName = (event) => {
    setLastName(event.target.value)
  }

  const handleUser = (event) => {
    setUser(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleForm = (event) => {
    event.preventDefault()
    console.log({
      firstName,
      lastName,
      user,
      email,
      password
    })
  }

  return(
    <ImageWithSpace>
      <H1># socialDev</H1>
      <H4>Tudo que acontece no mundo dev esta aqui</H4>
      <FormContainer>     
        <H2>Cira sua Conta</H2>
        <Form onSubmit={handleForm}>
          <Input label="nome" type="text" onChange={handleName}/>
          <Input label="sobrenome" type="text" onChange={handleLastName}/>
          <Input label="Usuário" type="text" onChange={handleUser}/>
          <Input label="Email ou usuario" type="email" onChange={handleEmail}></Input>
          <Input label="Senha" type="password" onChange={handlePassword}/>
          <Button>Entrar</Button>
        </Form>
        <Text>Já possui uma conta?<Link href="/Login">Faça seu Login</Link></Text>
      </FormContainer>        
    </ImageWithSpace>
  )
}

export default SignupPage