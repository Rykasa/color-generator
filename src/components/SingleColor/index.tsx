import { useEffect, useState } from "react";
import { Color } from "./styles";

type SingleColorProps = {
  hex: string;
  weight: number;
  type: string;
}

export function SingleColor({hex, weight, type}: SingleColorProps){
  const [alert, setAlert] = useState(false)

  function copyColorToClipboard(){
    setAlert(true)
    navigator.clipboard.writeText(`#${hex}`)
  }

  useEffect(() =>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return(
    <Color 
      className="color" 
      hex={hex} 
      type={type}
      onClick={copyColorToClipboard}
    >
      <span className="color-percent">{weight}%</span>
      <p className="color-hex-value">#{hex}</p>

      {alert && <p className="copy-alert">copied to clipboard</p>}
    </Color>
  )
}