import React, {useState} from 'react';


export default function TextForms(props) {

  const handleupclick=()=>{
      let newText=text.toUpperCase()
      setText(newText);
      props.showalert("Converted to Uppercase" )
  }

const handleloclick=()=>{
  let newText=text.toLowerCase()
  setText(newText);
  props.showalert("Converted to lowercase" )
}

const handlecopyclick=()=>{
  navigator.clipboard.writeText(text);
  props.showalert( "Copied to clipboard!" );
}

const handleclearclick=()=>{
  let newText='';
  setText(newText)
  props.showalert("Cleared all Text!");
}

const handleextraspace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showalert("Extra spaces removed!");
}

  const handleonchange=(event)=>{
    setText(event.target.value);
}
  const [text, setText] = useState(' ');
  return (
      <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control"  value={text} style={{backgroundColor: props.mode==='dark'?'#3d5266':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleextraspace}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.trim().length} characters {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
    </div>
    </>
  )
}
