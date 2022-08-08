import React from 'react';
import { RaceStatus } from '../../../../types/enums';
import styles from '../../../Controls.module.css';

interface RaceProps {
  updateRaceStatus(status: RaceStatus): void;
}
function Race({ updateRaceStatus }: RaceProps) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles.buttonColored} w-24`}
      onClick={() => updateRaceStatus(RaceStatus.start)}
    >
      Race
    </button>
  );
}

export default Race;
