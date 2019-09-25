import React, {useState} from 'react'
import {images} from '../data/imageData'
import {CanvasButton} from './CanvasButton'
import {View} from './View'

const MarkI = () => {
    const [title, setTitle] = useState('Foxes');
    const buttons = Object.entries(images).map(([title, {Width, Colours}]) =>
        <CanvasButton
            key={title}
            width={Width}
            colours={Colours}
            onClick={() => setTitle(title)}
        />
    );
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>
                Counter
            </button> {count}
            <div className="App-header">
                <div>
                    {buttons}
                </div>
            </div>
            <div>
                <View title={title} />
            </div>
        </div>
    )
};

export default MarkI;
