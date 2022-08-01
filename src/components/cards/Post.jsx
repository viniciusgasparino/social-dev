import styled from "styled-components"
import moment from "moment"
import Menu from "../navigation/Menu"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`
        
const StyledUserName = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
`

const ContainerText = styled.p`
  margin-top: 20px;
`

const ContainerMenu = styled.div`
  float: right;
`

function Post({text,user,date}){
  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  return(
    <PostContainer>
      <ContainerMenu>
        <Menu
          options={[
            {
              text: "Editar publicação",
              onclick: handleEdit
            },
            {
              text: "Deletar publicação",
              onclick: handleDelete
            }
          ]}
        />
      </ContainerMenu>
       <StyledUserName>@{user}</StyledUserName>
       <StyledDate>{moment(date).format("LLL")}</StyledDate>
       <ContainerText>
          {text}
       </ContainerText>
    </PostContainer>
  )
}

export default Post