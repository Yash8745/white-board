import React, { useState } from "react";


const Colors = (props) => {
  const colorOptions = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
  ];

  return (
    <div className="color-palette d-flex justify-content-end" style={{height:'100px'}}>
      {colorOptions.map((color, index) => (
        <div key={index}  style={{backgroundColor:color,borderRadius:'50%',border:"1px solid black", height:"30px",width:'30px',margin:'20px'}} onClick={()=>props.click(color)}></div>
        

      ))}
    </div>
  );
};

export default Colors;
