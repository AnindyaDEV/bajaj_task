import React from 'react';

function Dropdown({ setSelectedOptions }) {
    const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

    const handleChange = (e) => {
        const selected = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedOptions(selected);
    };

    return (
        <div className="dropdown-container">
            <label>Multi Filter</label>
            <select multiple onChange={handleChange} className="multi-select">
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
