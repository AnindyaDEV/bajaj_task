import React from 'react';

function ResponseDisplay({ response, selectedOptions }) {
    const renderResponse = () => {
        if (!response) return null;

        const { alphabets, numbers, highest_lowercase_alphabet } = response;
        const filteredResponse = {};

        if (selectedOptions.includes('Alphabets')) {
            filteredResponse.Alphabets = alphabets;
        }
        if (selectedOptions.includes('Numbers')) {
            filteredResponse.Numbers = numbers;
        }
        if (selectedOptions.includes('Highest lowercase alphabet')) {
            filteredResponse['Highest Lowercase Alphabet'] = highest_lowercase_alphabet;
        }

        return (
            <div className="response-display">
                {Object.entries(filteredResponse).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}:</strong> {JSON.stringify(value)}
                    </div>
                ))} 
            </div>
        );
    };

    return <div>{renderResponse()}</div>;
}

export default ResponseDisplay;
