import React from 'react';
import { RaceStatus } from '../../../../types/enums';
import styles from '../../../Controls.module.css';

interface ResetProps {
  updateRaceStatus(status: RaceStatus): void;
}

function Reset({ updateRaceStatus }: ResetProps) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles.buttonColored} w-24`}
      onClick={() => updateRaceStatus(RaceStatus.stop)}
    >
      Reset
    </button>
  );
}

export default Reset;
