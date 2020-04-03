import React from 'react';

export function PrintText(props: any){
    return (
        <div className={props.className}>
            <h1>{props.text === undefined? <p></p>:<p className="bold-text">Получено:</p> }</h1>
            <h1>{props.text}</h1>
        </div>
    );
}