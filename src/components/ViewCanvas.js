import React, {useRef, useEffect, memo} from 'react'
import {images} from '../data/imageData'

const imageWidth = 800;

export const ViewCanvas = ({title}) => {
    const canvasRef = useRef(null);
    const {Width, Colours} = images[title];
    const arrLen = Colours.length;
    const height = arrLen / Width;
    const cellWidth = Math.round(imageWidth / Width);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        Colours.forEach((colour, i) => {
            ctx.fillStyle = colour;
            ctx.fillRect( i % Width * cellWidth, Math.floor(i / Width) * cellWidth, cellWidth, cellWidth );
        });
    });
    return (
        <canvas ref={canvasRef} width={imageWidth} height={height * cellWidth} />
    )
};

export default memo(ViewCanvas);
