export interface ICar {
  name: string;
  color: string;
  id: number
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnerCar {
  id: number;
  number: number;
  name: string;
  color: string;
  wins: number;
  time: number;
}