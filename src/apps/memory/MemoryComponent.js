import React from "react";
import { createBoard } from "./createBoard";
import "./styles.css";
export const MemoryComponent = () => {
    const list = createBoard(50);
    console.log(list);
    return (
    <div>
        <h1>Memory app</h1>
        <hr />
        <div className="container">
           <div clasName="item">
               <div className="content">test</div>
            </div> 
        </div>
    </div>
    );
};