export enum DecOrInc {
  decrement = 'DECREMENT',
  increment = 'INCREMENT',
}

export enum View {
  garage = 'GARAGE',
  winners = 'WINNERS',
}

export enum RaceStatus {
  init = 'INIT',
  start = 'START',
  stop = 'STOP',
}

export enum EnginePos {
  started = 'started',
  stopped = 'stopped',
  drive = 'drive',
}

export enum RaceMode {
  manual = 'MANUAL',
  race = 'RACE',
}

export enum WinnersSorting {
  init = '',
  idDesc = '_sort=id&_order=DESC',
  idAsc = '_sort=id&_order=ASC',
  winsDesc = '_sort=wins&_order=DESC',
  winsAsc = '_sort=wins&_order=ASC',
  timeDesc = '_sort=time&_order=DESC',
  timeAsc = '_sort=time&_order=ASC',
}
