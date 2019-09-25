import React, {memo} from 'react'
import {images} from '../data/imageData'

const imageWidth = 800;

export const View = ({title}) => {
    const {Width, Colours} = images[title];
    const arrLen = Colours.length;
    const height = arrLen / Width;
    const cellWidth = Math.round(imageWidth / Width);

    return (
        <svg id="view" width={imageWidth} height={height * cellWidth}>
            {Colours.map((colour, i) => <rect
                key={i}
                x={i % Width * cellWidth}
                y={Math.floor(i / Width) * cellWidth}
                width={cellWidth}
                height={cellWidth}
                style={{'fill': colour}}
            />)}
        </svg>
    )
};

export default memo(View);
