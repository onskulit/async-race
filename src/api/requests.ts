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
    const response = await fetch(this.link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });
    return response.json();
  },
  async deleteCar(id: number) {
    await fetch(`${this.link}/${id}`, {
      method: 'DELETE',
    });
  },
  async updateCar(id: number, carData: { name: string, color: string }) {
    const response = await fetch(`${this.link}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });
    return response.json();
  },
};

export const winnersApi = {
  getWinners() {
  },
};
