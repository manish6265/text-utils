import React, {useState} from "react";

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        //console.log("uppercase is Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Text is convertes in uppercase","success");
    }
    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const handleLoClick=(event)=>{
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Text is convertes in lowercase","success");
    }
    const handleCopy=()=>{
      alert("copied")
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copy to clip board","success");
    }
    const handleCpClick=(event)=>{
      //let a=text.substring(0,1).toUpperCase();
      //a=a.toUpperCase();
      //a=a+text.substring(1,text.length);
      let a=text.substring(0,1).toUpperCase()+text.substring(1).toLowerCase();
      setText(a)
      props.showAlert("Text is capitalized","success");
    }
    const handleClearClick=(event)=>{
      setText("")
      props.showAlert("Text is clear","success");
      
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="7" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'gray' : 'white', color:props.mode==='dark' ? 'white' : '#042743' } }></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCpClick}>Convert to Capitalized case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text :"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  );
}
