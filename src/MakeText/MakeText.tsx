import React, { useState } from 'react';
import './MakeText.css'

export function MakeText(props: any){
    const [text, setText] = useState(""); 

    const changeText = (e:any) => {
        setText(e.target.value);
    }

    const handleSubmit = () => {
        props.onSubmit(text);
        setText("");
    };
    
    return(
        <div className = {props.className}>
            <p className="bold-text">Ведите текст:</p>
            <div>
                <textarea className = "text" onChange = { changeText } value = { text } /> 
                <button className = "button" onClick = { handleSubmit}>Нажми сюда</button>
            </div>
        </div>
    );
}