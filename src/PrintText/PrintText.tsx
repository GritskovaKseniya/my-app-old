import React from 'react';

export function PrintText(props: any){
    return (
        <div className={props.className}>
            <h1>{props.text}</h1>
        </div>
    );
}