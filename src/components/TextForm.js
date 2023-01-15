import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted into upper case.","success");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted into lower case.","success");
    }

    const handleClearClick = () =>{
        let newText = ('');
        setText(newText);
        props.showAlert("Text is cleared.","success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces is removed.","success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text is copied.","success");
        
    }

    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className="container" style= {{color: props.mode === 'dark' ? 'white' : '#05182a'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#05182a'}} id="myBox" rows="10"></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container" style= {{color: props.mode === 'dark' ? 'white' : '#05182a'}}>
            <h2>Your Text Summary.</h2>
            <p>Your text have {text.trim() === '' ? 0 : text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(' ').length} Minute take to read the above text.</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Write someting in the above box to previewit here."}</p>
        </div>
    </>

    
  )
}
