import React, { useContext, useEffect, useState } from 'react';
import styles from './Winners.module.css';
import Winner from './Winner/Winner';
import { garageApi, winnersApi } from '../../api/requests';
import { IWinnerCar } from '../../types/interfaces';
import { WinnersSorting } from '../../types/enums';
import { WinnersPageContext } from '../../contexts/context';
import PaginatedComponent from '../../components/PaginatedComponent/PaginatedComponent';
import { updateMaxPage } from '../../utils/pages';

interface WinnersPageProps {
  currentPage: number;
}

function WinnersPage({ currentPage }: WinnersPageProps) {
  const limitForPage = 10;
  const [winners, setWinners] = useState<IWinnerCar[]>([]);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [sorting, setSorting] = useState<WinnersSorting>(WinnersSorting.init);
  const [maxPage, setMaxPage] = useState(updateMaxPage(currentAmount, limitForPage));
  const updateWinners = async () => {
    const response = await winnersApi.getWinners(`_page=${currentPage}`, `_limit=${limitForPage}`, sorting);
    setCurrentAmount(+response.headers.get('X-Total-Count')!);
    setMaxPage(updateMaxPage(currentAmount, limitForPage));
    const winnersInfo = await response.json();
    if (winnersInfo) {
      const winnersWithCarInfo: IWinnerCar[] = [];
      let number = (currentPage - 1) * limitForPage;
      for (let i = 0; i < winnersInfo.length; i += 1) {
        /* eslint-disable no-await-in-loop */
        const winner = winnersInfo[i];
        number += 1;
        const carInfo = await garageApi.getCar(winner.id);
        winnersWithCarInfo.push({
          id: winner.id,
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
  }, [sorting, currentPage]);

  const { updatePage } = useContext(WinnersPageContext);

  return (
    <main className="flex flex-col items-center px-2 py-10 text-xl shadow-lg">
      <h2 className="text-2xl flex justify-center mb-4">
        Winners
        {currentAmount !== 0 && ` (${currentAmount})`}
      </h2>
      <PaginatedComponent currentPage={currentPage} maxPage={maxPage} updatePage={updatePage!}>
        <table>
          <thead>
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
          </thead>
          <tbody>
            {winners.map((winner) => <Winner winnerInfo={winner} key={winner.id} />)}
          </tbody>
        </table>
      </PaginatedComponent>
    </main>
  );
}

export default WinnersPage;
