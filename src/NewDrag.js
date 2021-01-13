import React, {useEffect, useState} from 'react';
import './App.css';

const NewDrag = () => {

        const [Values, setValues]= useState();  

        useEffect(() => {
        window.addEventListener("dragstart",() => {
            console.log("dragstart");
        });

        window.addEventListener("dragend", () => {
            console.log("dragend");
        })
        

        window.addEventListener("drag", () => {
            console.log("drag");
        })
        
        document.querySelector("#secondbox").addEventListener("dragenter", () => {
            console.log("drag_enter");
        });

        document.querySelector("#secondbox").addEventListener("dragleave", () => {
            console.log("drag_leave");
        });

        document.querySelector("#secondbox").addEventListener("dragover", () => {
            console.log("drag_over");
        });
        



    }, []);

    const handleDrop = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.dataTransfer.files[0].name);
        setValues(e.dataTransfer.files.name);
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
        <div>
            <div
            className="ones" id="bigbox"
            style={{
            float: "left",
            width: "800px",
            height: "400px",
            margin: "100px",
            border: "3px solid black"
            
            }}
            >

            <div
            draggable={true}
            style={{
            float: "left",
            width: "300px",
            height: "100px",
            margin: "100px",
            padding: " 10px",
            border: "3px solid black",
            }}
            >
            BOX
            </div>

        
        </div>
      </div>
      <div
            className="ones" id="secondbox" onDrop= {handleDrop} 
            onDragOver = {handleDragOver}
            style={{
            float: "left",
            width: "500px",
            height: "400px",
            margin: "100px",
            border: "3px solid black",
            padding: "80px"
            }}
            >
                Second Box</div>
      </div>
    )
}
export default NewDrag;