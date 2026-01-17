
import React, { useState, useRef } from 'react';

export const PinInput = ({ setPin }) => {
    const [values, setValues] = useState(['', '', '', '']);
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const val = e.target.value;
        if (isNaN(val)) return;

        const newValues = [...values];
        newValues[index] = val.slice(-1); // Only take the last entered digit
        setValues(newValues);

        // Pass the full pin to parent
        if (setPin) {
            setPin(newValues.join(''));
        }

        // Auto-focus next input
        if (val && index < 3) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !values[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <div className="flex space-x-4">
            {values.map((v, i) => (
                <input
                    key={i}
                    ref={(el) => (inputsRef.current[i] = el)}
                    type="text"
                    value={v}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className={`w-14 h-14 text-center text-2xl border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors
            ${v ? 'border-blue-500' : 'border-gray-200'}`}
                />
            ))}
        </div>
    );
};
