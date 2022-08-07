import React, { useEffect, useState } from 'react';
import styles from './Winners.module.css';
import Winner from './Winner/Winner';
import { garageApi, winnersApi } from '../../api/requests';
import { IWinnerCar } from '../../types/interfaces';

function WinnersPage() {
  const [winners, setWinners] = useState<IWinnerCar[]>([]);
  const updateWinners = async () => {
    const winnersInfo = await winnersApi.getWinners();
    if (winnersInfo) {
      const winnersWithCarInfo: IWinnerCar[] = [];
      let number = 0;
      for (let i = 0; i < winnersInfo.length; i += 1) {
        /* eslint-disable no-await-in-loop */
        const winner = winnersInfo[i];
        number += 1;
        const carInfo = await garageApi.getCar(winner.id);
        winnersWithCarInfo.push({
          number,
          name: carInfo.name,
          color: carInfo.color,
          wins: winner.wins,
          time: winner.time,
        });
        /* eslint-enable no-await-in-loop */
      }
      setWinners(winnersWithCarInfo);
    }
  };

  useEffect(() => {
    updateWinners();
  }, []);

  return (
    <main className="flex justify-center px-2 py-10 text-xl shadow-lg">
      <table>
        <tr className="bg-purple-300">
          <th className={styles.cell}>Number</th>
          <th className={`${styles.cell} w-20`}>Car</th>
          <th className={`${styles.cell} w-40`}>Name</th>
          <th className={styles.cell}>Wins</th>
          <th className={styles.cell}>Best Time (s)</th>
        </tr>
        {winners.map((winner) => <Winner winnerInfo={winner} />)}
      </table>
    </main>
  );
}

export default WinnersPage;
