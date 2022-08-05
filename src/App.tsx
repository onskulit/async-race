import React, { useCallback, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import GaragePage from './pages/GaragePage/GaragePage';
import WinnersPage from './pages/WinnersPage/WinnersPage';
import { DecOrInc, View } from './types/enums';
import { GaragePageContext } from './contexts/context';

function App() {
  const [currentGaragePage, setCurrentGaragePage] = useState(1);

  const updatePage = useCallback((view: View) => {
    let page = view === View.garage ? currentGaragePage : currentGaragePage;
    const setter = view === View.garage ? setCurrentGaragePage : setCurrentGaragePage;
    return (operation: DecOrInc) => {
      page = operation === DecOrInc.increment ? page + 1 : page - 1;
      setter(page);
    };
  }, [currentGaragePage]);

  const memoizedGarageContext = useMemo(() => ({
    updatePage: updatePage(View.garage),
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
        <Route path="/winners" element={<WinnersPage />} />
      </Routes>
    </div>
  );
}

export default App;
