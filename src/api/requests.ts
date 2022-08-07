import { EnginePos } from '../types/enums';
import { ICar, IWinner } from '../types/interfaces';

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

export const engineApi = {
  link: `${initialLink}/engine`,
  async StartOrStop(id: number, status: EnginePos) {
    const response = await fetch(`${this.link}?${new URLSearchParams({
      id: id.toString(),
      status,
    })}`, {
      method: 'PATCH',
    });
    return response.json();
  },
  async checkEngine(id: number) {
    const response = await fetch(`${this.link}?${new URLSearchParams({
      id: id.toString(),
      status: EnginePos.drive,
    })}`, {
      method: 'PATCH',
    });
    return response.status;
  },
};

export const winnersApi = {
  link: `${initialLink}/winners`,
  async getWinners() {
    const response = await fetch(this.link);
    return response.json();
  },
  async getWinner(id: number): Promise<IWinner> {
    const response = await fetch(`${this.link}/${id}`);
    return response.json();
  },
  async setWinner(winner: IWinner) {
    await fetch(this.link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winner),
    });
  },
  async updateWinner(winner: IWinner) {
    await fetch(`${this.link}/${winner.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wins: winner.wins, time: winner.time }),
    });
  },
};
