import React from 'react';
import styles from '../../Controls.module.css';

function Update() {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="text"
        placeholder="Type here"
        className={`w-42 ${styles.input} ${styles.inputDisabled}`}
        disabled
      />
      <input type="color" className="w-12 h-6 rounded" disabled />
      <button
        type="submit"
        className={`grow min-w-24 ${styles.button} ${styles.buttonLight}`}
      >
        Update
      </button>
    </div>
  );
}

export default Update;
