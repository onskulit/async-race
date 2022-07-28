import React from 'react';
import styles from '../Controls.module.css';

function Create() {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="text"
        placeholder="Type here"
        className={`w-42 ${styles.input}`}
      />
      <div className="inline-block w-12 h-6 bg-slate-500 rounded" />
      <button
        type="submit"
        className={`grow ${styles.button} ${styles.buttonLight}`}
      >
        Create
      </button>
    </div>
  );
}

export default Create;
