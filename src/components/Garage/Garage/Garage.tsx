import React, { useEffect, useState } from 'react';
import Car from './Car/Car';

interface ICar {
  name: string;
  color: string;
  id: number
}

function Garage() {
  const [cars, serCars] = useState<ICar[]>([]);
  useEffect(() => {
    fetch('http://127.0.0.1:3000/garage')
      .then((response) => response.json())
      .then((res) => serCars(res))
      .catch((error) => console.log(error));
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
