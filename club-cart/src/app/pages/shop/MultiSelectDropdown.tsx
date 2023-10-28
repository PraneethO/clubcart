import React, { useState } from 'react';
import './MultiSelectDropdown.css';

const MultiSelectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [arrowRotation, setArrowRotation] = useState(0); // Initialize the rotation to 0

  const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // Update the arrow rotation based on isOpen
    setArrowRotation(isOpen ? 0 : 90);
  };

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="multi-select-dropdown">
      <div className="selected-options">
        Selected: {selectedOptions.join(', ')}
      </div>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <i
          className="arrow"
          style={{ transform: `rotate(${arrowRotation}deg)` }} // Apply rotation here
        ></i>
        <span>Select Options</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                className="dropdownItems"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
