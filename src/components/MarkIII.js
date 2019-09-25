import React, {useState, useCallback} from 'react'
import {images} from '../data/imageData'
import CanvasButton from './CanvasButton'
import View from './View'

const MarkIII = () => {
    const [title, setTitle] = useState('Foxes');
    const memoizedCallback = useCallback(e => setTitle(e.currentTarget.dataset.title), []);
    const buttons = Object.entries(images).map(([title, {Width, Colours}]) => <CanvasButton
            key={title}
            width={Width}
            colours={Colours}
            data-title={title}
            onClick={memoizedCallback}
        />
    );
    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={() => setCount(c => c + 1)}>
                Counter
            </button>
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

export default MarkIII;
