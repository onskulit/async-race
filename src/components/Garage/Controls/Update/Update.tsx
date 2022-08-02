import React, { useEffect, useState } from 'react';
import { ICar } from '../../../../types/interfaces';
import styles from '../../Controls.module.css';

interface UpdateProps {
  selectedCar: ICar;
  updateCar(car: ICar): void;
}
function Update({ selectedCar, updateCar }: UpdateProps) {
  const [inputValue, setInputValue] = useState('');
  const [colorValue, setColorValue] = useState('#000000');
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (selectedCar.id === 0) {
      setIsSelected(false);
      setInputValue('');
      setColorValue('#000000');
    } else {
      setIsSelected(true);
      setInputValue(selectedCar.name);
      setColorValue(selectedCar.color);
    }
  }, [selectedCar.id]);

  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="text"
        placeholder="Type here"
        className={`w-42 ${styles.input} ${!isSelected ? styles.inputDisabled : ''}`}
        disabled={!isSelected}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <input
        type="color"
        className="w-12 h-6 rounded hover:cursor-pointer "
        disabled={!isSelected}
        value={colorValue}
        onChange={(event) => setColorValue(event.target.value)}
      />
      <button
        type="submit"
        className={`grow min-w-24 ${styles.button} ${styles.buttonLight}`}
        onClick={() => updateCar({ name: inputValue, color: colorValue, id: selectedCar.id })}
      >
        Update
      </button>
    </div>
  );
}

export default Update;
