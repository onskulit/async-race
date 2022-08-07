import React from 'react';
import CarLogo from '../../../components/Logos/CarLogo';
import { IWinnerCar } from '../../../types/interfaces';
import styles from '../Winners.module.css';

interface WinnerProps {
  winnerInfo: IWinnerCar;
}
function Winner({ winnerInfo }: WinnerProps) {
  return (
    <tr>
      <td className={styles.cell}>{winnerInfo.number}</td>
      <td className={styles.cell}><CarLogo color={winnerInfo.color} isCentered /></td>
      <td className={styles.cell}>{winnerInfo.name}</td>
      <td className={styles.cell}>{winnerInfo.wins}</td>
      <td className={styles.cell}>{winnerInfo.time}</td>
    </tr>
  );
}

export default Winner;
