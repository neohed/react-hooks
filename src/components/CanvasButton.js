import React, { useRef, useEffect, memo } from 'react'

export const CanvasButton = ({colours, width, ...rest}) => {
    const canvasRef = useRef(null);
    const arrLen = colours.length;
    const height = arrLen / width;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        for (let i = 0; i < arrLen; i++) {
            ctx.fillStyle = colours[i];
            ctx.fillRect( i % width, Math.floor(i / width), 1, 1 );
        }
    });

    return (
        <button {...rest} className="canvas-button">
            <canvas ref={canvasRef} width={width} height={height} />
        </button>
    )
};

export default memo(CanvasButton)
