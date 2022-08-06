import { RaceMode, EnginePos } from '../../../../types/enums';
import { engineApi } from '../../../../api/requests';

const races: [number, ReturnType<typeof requestAnimationFrame>][] = [];
let places: number[] = [];

const findSpeed = (
  velocity: number,
  initDistance: number,
  actualDistance: number,
) => (velocity * actualDistance * 10) / initDistance;

const endRace = (
  mode: RaceMode,
  id: number,
  raceTime: string,
  updateCarAlert: (alert: string) => void,
) => {
  if (mode === RaceMode.race) {
    places.push(id);
    const place = places.indexOf(id);
    if (place === 0) {
      /* Server query */
      updateCarAlert(`Winner! ${raceTime}s`);
    } else {
      updateCarAlert(`${place + 1} place. ${raceTime}s`);
    }
  } else updateCarAlert(`${raceTime}s`);
};

export const runRaceAnimation = async (
  id: number,
  animItem: HTMLElement,
  endpoint: number,
  mode: RaceMode,
  updateCarAlert: (alert: string) => void,
) => {
  const { velocity, distance } = await engineApi.StartOrStop(id, EnginePos.started);
  const item = animItem;
  const carPos = item.offsetLeft;
  const actualDistance = endpoint - carPos;
  const distancePerFrame = findSpeed(velocity, distance, actualDistance);
  let currentValue = +item.style.left.replace(/[^.0-9]/g, '');
  let race = 0;
  const startTime = performance.now();
  if (mode === RaceMode.race) places = [];
  const animate = () => {
    const racePare = races.find((pare) => pare[0] === id);
    if (item.offsetLeft < endpoint) {
      currentValue += distancePerFrame;
      item.style.left = `${currentValue}px`;
      race = requestAnimationFrame(animate);
      if (racePare) racePare[1] = race;
    } else if (racePare) {
      const endTime = performance.now();
      const raceTime = ((endTime - startTime) / 1000).toFixed(2);
      endRace(mode, id, raceTime, updateCarAlert);
    }
  };
  race = requestAnimationFrame(animate);
  races.push([id, race]);
};

export const cleanRaceAnimation = (id: number, animItem: HTMLElement, startPosition: string) => {
  const race = races.find((pare) => pare[0] === id);
  if (race) {
    cancelAnimationFrame(race[1]);
    races.splice(races.indexOf(race), 1);
  }
  const item = animItem;
  item.style.left = startPosition;
};
