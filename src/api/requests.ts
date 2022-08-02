import { ICar } from '../types/interfaces';

const initialLink = 'http://127.0.0.1:3000';

export const garageApi = {
  link: `${initialLink}/garage`,
  async getCars() {
    const response = await fetch(this.link);
    return response.json();
  },
  async getCar(id: number) {
    const response = await fetch(`${this.link}/${id}`);
    return response.json();
  },
  async setCar(carData: { name: string, color: string }) {
    await fetch(this.link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });
  },
  async deleteCar(id: number) {
    await fetch(`${this.link}/${id}`, {
      method: 'DELETE',
    });
  },
  async updateCar(car: ICar) {
    await fetch(`${this.link}/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: car.name, color: car.color }),
    });
  },
};

export const winnersApi = {
  getWinners() {
    return true;
  },
};
