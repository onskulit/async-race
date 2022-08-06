import React, { useState } from 'react';
import styles from '../../Controls.module.css';

interface CreateProps {
  setCar({ name, color }: { name: string, color: string}): void;
}
function Create({ setCar }: CreateProps) {
  const [inputValue, setInputValue] = useState('');
  const [colorValue, setColorValue] = useState('#000000');
  const createCar = () => {
    setCar({ name: inputValue, color: colorValue });
    setInputValue('');
    setColorValue('#000000');
  };
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="text"
        placeholder="Type here"
        className={`w-[12.5rem] ${styles.input}`}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <input
        type="color"
        className="w-12 h-6 rounded hover:cursor-pointer"
        value={colorValue}
        onChange={(event) => setColorValue(event.target.value)}
      />
      <button
        type="submit"
        className={`grow ${styles.button} ${styles.buttonLight}`}
        onClick={createCar}
      >
        Create
      </button>
    </div>
  );
}

export default Create;
