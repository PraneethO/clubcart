import React, { useState } from 'react';
import './MultiSelectDropdown.css';

const MultiSelectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // Specify the type as a string array

  const options: string[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option: string) => {
    // Specify the type of the 'option' parameter
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="multi-select-dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>Select Options</span>
        <i className={`arrow ${isOpen ? 'up' : 'down'}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
      <div className="selected-options">
        Selected: {selectedOptions.join(', ')}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
