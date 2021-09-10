import React, { useState } from 'react'

function Textarea(props) {
    const onChangeHandler = (event) => {
        setText(event.target.value)
    }
    const changeToUpper = () => {
        setText(text.toUpperCase())
    }
    const changeToLower = () => {
        setText(text.toLowerCase())
    }
    const changeToClear = () => {
        setText("") 
    }
    const copyText = () => {
        const e1 = document.getElementById('textarea')
        e1.select()
        e1.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text)
    }

    const revomeExtraSpaces = () => {
        const space = ""
        var txt = text.split(" ")
        console.log(txt)
        txt = txt.filter(x => x !== space)
        console.log(txt)
        setText(txt.join(" "))
    }

    const [text, setText] = useState("");
    return (
        <div style={{ height: "92vh", backgroundColor: props.mode === "light" ? "white" : "#08384d", color: props.mode === "light" ? "black" : "white", textAlign: "left" }} className="px-5 py-2" >
            <div className="form-group py-2" style={{ textAlign: "center" }}>
                <label htmlFor="textarea" ><h3 style={{ textAlign: "center" }}> Enter Your Text Here. </h3></label>
                <textarea className="form-control border" value={text} onChange={onChangeHandler} id="textarea" style={{ backgroundColor: props.mode === "light" ? "white" : "#08384d", color: props.mode === "light" ? "black" : "white" }} rows="10"></textarea>
            </div>
            <div style={{ textAlign: "center" }}>
                <button className="btn btn-primary m-1" onClick={changeToUpper}>Convet to UpparCase</button>
                <button className="btn btn-primary m-1" onClick={changeToLower}>Convet to LowerCase</button>
                <button className="btn btn-primary m-1" onClick={changeToClear}>Clear Text</button>
                <button className="btn btn-primary m-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary m-1" onClick={revomeExtraSpaces}>Remove Spaces</button>
                <br />
                </div>
                <div className="px-5" style={{ color: props.mode === "light" ? "black" : "white" }}>
                    <h4>Text Summary: {text.length} character, {text.split(" ").length} words  </h4>
                    <h4>Estimated Read Time: {text.split(" ").length * 0.01} Minutes. </h4>
                </div>
            
            <div className="px-5">
                <h2><b>Preview</b></h2>
                {text.length > 0 ? text : "Enter text in text area to see preview here."}
            </div>
        </div>
    )
}
export default Textarea
