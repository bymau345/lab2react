import React, { useState } from "react";
import { createBoard } from "./createBoard";
import "./styles.css";
export const MemoryComponent = () => {
    const list = createBoard(50);
    const [stateBoard, setStateBoard] = useState(list);
    
    return (
    <div>
        <h1>Memory app</h1>
        <hr />
        <div className="container">
            {stateBoard.map(item=> {
               return (<div className="item">
                   <div className="content">{item.frontend}</div>
                   </div>
                );
            })}
            </div> 
        </div>

    );
};