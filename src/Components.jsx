import React , {useState} from 'react'


export default function Tabs() {
  const [text, setText] = useState();
  const [updated,setUpdated] = useState();
  const textonChange = (event) => {setText(event.target.value)}
  
  const buttonOnClick =()=>{setUpdated(text);}
  return (
    <div>
      <input type="text" value={text} onChange={textonChange}/>
    <button onClick={buttonOnClick} >ACTUALIZAR  </button>
    <p>texto input: {text}</p>
    <p>text actualizado:{updated}</p>
    </div>
  )
}
