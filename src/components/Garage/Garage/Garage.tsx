import React, { useEffect, useState } from 'react';
import Car from './Car/Car';
import { garageApi } from '../../../api/requests';
import { ICar } from '../../../types/interfaces';

function Garage() {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    /* garageApi.setCar({ name: 'Geely', color: '#3f4929' }); */
    garageApi.getCars()
      .then((res) => setCars(res));
  }, []);

  return (
    <div>
      <h2 className="text-2xl flex justify-center mb-4">
        Garage
        {` (${cars.length})`}
      </h2>
      <div className="px-5">
        { cars.map(((car) => <Car name={car.name} color={car.color} key={car.id} />)) }
      </div>
    </div>
  );
}

export default Garage;
