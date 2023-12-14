import React from 'react'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {toast, Slide} from 'react-toastify';


export default function TextForm(props) {
    const[toggle, setToggle] = useState(false);
    const [text,setText] = useState('');
    const handleChangeClick = () => {
        console.log("Changed Case " + text);
        console.log("Toggle State " + toggle);
        if(!toggle){
            setText(text.toUpperCase());
            setToggle(true)
            toast.success("Converted to UpperCase", {
                position: 'bottom-right',
                transition: Slide,
                theme: props.mode
            })
        }
        else{
            setText(text.toLowerCase());
            setToggle(false);
            toast.success("Converted to LowerCase", {
                position: 'bottom-right',
                transition: Slide,
                theme: props.mode
            })
        }
    }
    const handleClearClick = () => {
        setText('')
        toast.success("TextBox is Cleared", {
            position: 'bottom-right',
            transition: Slide,
            theme: props.mode
        })
    }

    const handleCopy = () => {
        let textArea = document.getElementById('contentBox');
        textArea.setSelectionRange(0, textArea.value.length);
        navigator.clipboard.writeText(textArea.value);
        toast.success("Copied to Clipboard", {
            position: 'bottom-right',
            transition: Slide,
            theme: props.mode
        })
    }

    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }


    // let countWords = () => {
    //     const textBox = document.getElementById('contentBox');
    //     const chars = textBox.value.trim()
    //     const words = text.split(/\s+/);
    //     const numWords = words.length;
    //     return numWords;
    // }

    return (
    <div className="form-floating">
        <div className="mb-3">
            <h1 className={`text-${props.mode === 'dark'?'light':'dark'}`}>{props.heading}</h1>
            <textarea className={`form-control bg-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'} border-0`} value = {text} placeholder="Write Something You Want........ ✏ " id="contentBox" onChange={handleOnChange} rows="20" ></textarea>
        </div>
        <div className="container">
            <div className="d-flex flex-row-reverse bd-highlight">
                <div className="p-2">
                    <button className={`btn btn-${props.mode === 'dark'?'dark':'primary'}`} value = "Convert to UpperCase" id = "clearText" onClick={handleClearClick}>Clear Text</button>
                </div>
                <div className="p-2">
                    <button className={`btn btn-${props.mode === 'dark'?'dark':'primary'}`} value = "Convert to UpperCase" id = "changeText" onClick={handleChangeClick}>Change Case</button>
                </div>
                <div className="p-2">
                    <button className={`btn btn-${props.mode === 'dark'?'dark':'primary'}`} value = "Convert to UpperCase" id = "copyText" onClick={handleCopy}>Copy Text</button>
                </div>
            </div>
        </div>
        <div className={`container text-${props.mode === 'dark'?'light':'dark'}`}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).length - 1} words and {text.trim().length} characters</p>
            <p>Time to read {(text.split(/\s+/).length * 1/125)} minutes</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
    )
}
