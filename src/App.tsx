import React, { useCallback, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import GaragePage from './pages/GaragePage/GaragePage';
import WinnersPage from './pages/WinnersPage/WinnersPage';
import { DecOrInc, View } from './types/enums';
import { GaragePageContext, WinnersPageContext } from './contexts/context';

function App() {
  const [currentGaragePage, setCurrentGaragePage] = useState(1);
  const [currentWinnersPage, setCurrentWinnersPage] = useState(1);

  const updatePage = useCallback((view: View) => {
    let page = view === View.garage ? currentGaragePage : currentWinnersPage;
    const setter = view === View.garage ? setCurrentGaragePage : setCurrentWinnersPage;
    return (operation: DecOrInc) => {
      page = operation === DecOrInc.increment ? page + 1 : page - 1;
      setter(page);
    };
  }, [currentGaragePage, currentWinnersPage]);

  const memoizedGarageContext = useMemo(() => ({
    updatePage: updatePage(View.garage),
  }), []);

  const memoizedWinnersContext = useMemo(() => ({
    updatePage: updatePage(View.winners),
  }), []);

  return (
    <div className="px-10 from-neutral-800">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            (
              <GaragePageContext.Provider value={memoizedGarageContext}>
                <GaragePage currentPage={currentGaragePage} />
              </GaragePageContext.Provider>
            )
          }
        />
        <Route
          path="/winners"
          element={
            (
              <WinnersPageContext.Provider value={memoizedWinnersContext}>
                <WinnersPage currentPage={currentWinnersPage} />
              </WinnersPageContext.Provider>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
