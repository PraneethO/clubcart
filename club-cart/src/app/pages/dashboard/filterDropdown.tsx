import React, { useState } from 'react';

const FilterDropdown: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const interestOptions: string[] = [
    'Art',
    'Music and Performing Arts',
    'Culinary Arts',
    'Computer Science',
    'Math and Physics',
    'Health',
    'Business',
    'Forigen Language',
    'Community Service',
  ];

  const handleInterestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInterest(event.target.value);
  };

  return (
    <div>
      <label>Select an Area of Interest:</label>
      <select onChange={handleInterestChange} value={selectedInterest || ''}>
        <option value="">-- Select --</option>
        {interestOptions.map((interest, index) => (
          <option key={index} value={interest}>
            {interest}
          </option>
        ))}
      </select>
      {selectedInterest && <p>You selected: {selectedInterest}</p>}
    </div>
  );
};

export default FilterDropdown;
