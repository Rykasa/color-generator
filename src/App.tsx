import { 
  ColorContainer, 
  Container, 
  Form, 
  FormContainer 
} from "./App.styles"

export function App(){
  return(
    <Container>
      <FormContainer>
        <Form>
          <input type="text" />
          <div className="btn-wrapper">
            <button>Generate</button>
            <button>random color</button>
          </div>
        </Form>
      </FormContainer>
      <ColorContainer>
        <div className="color">a</div>
      </ColorContainer>
    </Container>
  )
}