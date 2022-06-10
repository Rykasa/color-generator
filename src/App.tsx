import { useState } from "react"
import Values from "values.js"
import { 
  ColorContainer, 
  Container, 
  Form, 
  FormContainer 
} from "./App.styles"

export function App(){
  const [colors, setColors] = useState(new Values('#f15025').all())
  console.log(colors)
  return(
    <Container>
      <FormContainer>
      <h3>Color<span>Full</span></h3>
        <Form>
          <input type="text" />
          <div className="btn-wrapper">
            <button>Generate</button>
            <button>random color</button>
          </div>
        </Form>
      </FormContainer>
      <ColorContainer>
        {colors.map((color)=>{
          const {hex} = color
          return(
            <div className="color"></div>
          )
        })}
      </ColorContainer>
    </Container>
  )
}