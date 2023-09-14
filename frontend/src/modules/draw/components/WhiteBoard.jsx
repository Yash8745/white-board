// Note to future self 
// Changing the canvas height or width resets all of its other properties like pencolor or line thickness 
// This is a defalt feature and not your fault 
// Please keep that in mind while editing canvas in the future 
// Yours Truly 
// Yash(2hr wasted on finding this)

import React, { useEffect, useRef, useState } from "react";

const WhiteBoard = (props) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);

  const divRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasdiv = divRef.current;

    // const canvasheight=canvasdiv.offsetHeight;
    // const canvaswidth=canvasdiv.offsetWidth;
    //Will get the height and width including border and margin

    //Excludes border and margin
    const canvasheight = canvasdiv.clientHeight;
    const canvaswidth = canvasdiv.clientWidth;

    canvas.width = canvaswidth;
    canvas.height = canvasheight;
    
    ctx.strokeStyle ='black';
    ctx.lineWidth = 2;

    
    setContext(ctx);
  }, []);

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle =props.color;
  },[props.color])

  const startDrawing = (e) => {
    setIsDrawing(true);
    setPrevX(e.nativeEvent.offsetX);
    setPrevY(e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();

    setPrevX(e.nativeEvent.offsetX);
    setPrevY(e.nativeEvent.offsetY);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div ref={divRef} className="w-100">
      <canvas
        ref={canvasRef}
        className="w-100"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
};

export default WhiteBoard;
