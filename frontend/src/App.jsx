import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import Dropdown from './components/Dropdown';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';  // Importing the custom CSS

function App() {
    const [response, setResponse] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div className="app-container">
            <h1>{import.meta.env.VITE_ROLL_NUMBER}</h1>
            <JsonInput setResponse={setResponse} />
            {response && <Dropdown setSelectedOptions={setSelectedOptions} />}
            <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </div>
    );
}

export default App;
