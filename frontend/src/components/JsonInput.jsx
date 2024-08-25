import React, { useState } from 'react';
import axios from 'axios';

function JsonInput({ setResponse }) {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const parsedData = JSON.parse(jsonInput);
            if (!Array.isArray(parsedData.data)) {
                throw new Error("Invalid format. The JSON should contain an array in 'data'.");
            }
            
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/bfhl`, parsedData);
            setResponse(response.data);
        } catch (err) {
            setError(err.message || 'Invalid JSON input');
        }
    };

    return (
        <div className="json-input-container">
            <form onSubmit={handleSubmit}>
                <label>API Input</label>
                <input
                    type="text"
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder='{"data":["M","1","334","4","B"]}'
                    className="json-input"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default JsonInput;
