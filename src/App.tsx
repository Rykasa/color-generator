import { FormEvent, useEffect, useState } from "react"
import Values from "values.js"
import { 
  ColorContainer, 
  Container, 
  Form, 
  FormContainer 
} from "./App.styles"
import { SingleColor } from "./components/SingleColor"
import { hexValues } from "./data/hexValues"
import { convertRgbToHex } from "./utils/convertRgbToHex"

export function App(){
  const [colors, setColors] = useState<Values[]>(getLocalData())
  const [colorValue, setColorValue] = useState('')
  const [previousColorValue, setPreviusColorValue] = useState(getPreviousColorValue());
  const [error, setError] = useState(false)

  function getLocalData(){
    const storage = localStorage.getItem('color')
    if(typeof storage === 'string'){
      const colorsStorage = JSON.parse(storage)
      const baseColor = colorsStorage[10]
      const parsedColor = convertRgbToHex(baseColor.rgb[0], baseColor.rgb[1], baseColor.rgb[2])
      return new Values(parsedColor).all(10)
    }else{
      return new Values('#ffe4c4').all(10)
    }
  }

  function getPreviousColorValue(){
    const storage = localStorage.getItem('color')
    if(typeof storage === 'string'){
      const colorsStorage = JSON.parse(storage)
      const baseColor = colorsStorage[10]
      const parsedColor = convertRgbToHex(baseColor.rgb[0], baseColor.rgb[1], baseColor.rgb[2])
      return parsedColor
    }else{
      return '#ffe4c4'
    }
  }

  useEffect(() =>{
    localStorage.setItem('color', JSON.stringify(colors))
  }, [colors])

  function generateColor(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    try{
      const color = new Values(colorValue).all(10)
      setColors(color)
      setError(false)
      setPreviusColorValue(colorValue)
      setColorValue('')

    }catch(error){
      console.log(error)
      setError(true)
      setColorValue('')
    }
  }

  function generateRandomColor (){
    let randomHexColor = ''
    for(let i = 0; i < 6; i++){
      let randomIndex = Math.floor(Math.random() * hexValues.length)
      randomHexColor += hexValues[randomIndex]
    }
    setColorValue(`#${randomHexColor}`)
  }

  return(
    <Container>
      <FormContainer>
      <h3>Color<span>Full</span></h3>
        <Form onSubmit={generateColor} error={error}>
          <input 
            type="text"
            placeholder={previousColorValue}
            value={colorValue}
            onChange={e => setColorValue(e.target.value)}
            onFocus={() => setColorValue('#')}
          />
          <div className="btn-wrapper">
            <button type="submit">Generate</button>
            <button 
              type="button" 
              onClick={generateRandomColor}
            >random color</button>
          </div>
        </Form>

      </FormContainer>
      <ColorContainer>
        {colors.map((color, index)=>{
          const {hex, weight, type} = color;
          return(
            <SingleColor hex={hex} key={index} weight={weight} type={type} />
          )
        })}
      </ColorContainer>
    </Container>
  )
}