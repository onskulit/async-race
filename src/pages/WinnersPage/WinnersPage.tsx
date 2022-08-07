import React, { useEffect, useState } from 'react';
import styles from './Winners.module.css';
import Winner from './Winner/Winner';
import { garageApi, winnersApi } from '../../api/requests';
import { IWinnerCar } from '../../types/interfaces';
import { WinnersSorting } from '../../types/enums';

function WinnersPage() {
  const [winners, setWinners] = useState<IWinnerCar[]>([]);
  const [sorting, setSorting] = useState<WinnersSorting>(WinnersSorting.init);
  const updateWinners = async () => {
    const winnersInfo = await winnersApi.getWinners(sorting);
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
  }, [sorting]);

  return (
    <main className="flex flex-col items-center px-2 py-10 text-xl shadow-lg">
      <h2 className="text-2xl flex justify-center mb-4">
        Winners
      </h2>
      <table>
        <tr className="bg-purple-300">
          <th className={styles.cell}>Number</th>
          <th className={`${styles.cell} w-20`}>Car</th>
          <th className={`${styles.cell} w-40`}>Name</th>
          <th
            className={`${styles.cell} cursor-pointer`}
            onClick={() => {
              if (sorting === WinnersSorting.winsAsc) {
                setSorting(WinnersSorting.winsDesc);
              } else {
                setSorting(WinnersSorting.winsAsc);
              }
            }}
          >
            Wins
            <div className="inline-block w-1">
              {sorting === WinnersSorting.winsAsc && '↑'}
              {sorting === WinnersSorting.winsDesc && '↓'}
            </div>
          </th>
          <th
            className={`${styles.cell} cursor-pointer`}
            onClick={() => {
              if (sorting === WinnersSorting.timeAsc) {
                setSorting(WinnersSorting.timeDesc);
              } else {
                setSorting(WinnersSorting.timeAsc);
              }
            }}
          >
            Best Time (s)
            <div className="inline-block w-1">
              {sorting === WinnersSorting.timeAsc && '↑'}
              {sorting === WinnersSorting.timeDesc && '↓'}
            </div>
          </th>
        </tr>
        {winners.map((winner) => <Winner winnerInfo={winner} />)}
      </table>
    </main>
  );
}

export default WinnersPage;
