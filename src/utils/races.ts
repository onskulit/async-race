const races: [number, ReturnType<typeof setInterval>][] = [];

export const runRace = (id: number, animationItem: HTMLElement, endpoint: number) => {
  const item = animationItem;
  let currentValue = +item.style.left.replace(/[^.0-9]/g, '');
  const race = setInterval(() => {
    if (item.offsetLeft >= endpoint) {
      clearInterval(race);
      races.splice(races.indexOf([id, race]), 1);
      return;
    }
    currentValue += 5;
    item.style.left = `${currentValue}px`;
  }, 10);
  races.push([id, race]);
  console.log(races);
};

export const cleanRace = (id: number, animationItem: HTMLElement, startPosition: string) => {
  const race = races.find((pare) => pare[0] === id);
  if (race) {
    clearInterval(race[1]);
    races.splice(races.indexOf(race), 1);
  }
  console.log(races);
  const item = animationItem;
  item.style.left = startPosition;
};
