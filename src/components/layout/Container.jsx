import styled from "styled-components"

const StyledContainer = styled.div`
  display:flex;
  justify-content: center;
`

const StyledChildren = styled.div`
  max-width: 700px;
  width: 100%;
`

function Container ({children}){
  return(
    <div>
      <StyledContainer>
        <StyledChildren>
          
        </StyledChildren>
        {children}
      </StyledContainer>
    </div>
  )
}


export default Container