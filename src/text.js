import React, { useEffect, useRef, useState } from 'react';
import './text.css';

function App() {

    var [name, setName] = useState('');
    var prevName = useRef('');


    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <div id='container'>
            <textarea id="main" value={name} onChange={e => setName(e.target.value)} ref={prevName} placeholder='Enter your paragraph here' />

            <h1>After removing blank spaces</h1>
            <div id='show'>
                {prevName.current}
            </div>
        </div>
    );
}

export default App;