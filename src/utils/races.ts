const races: [number, ReturnType<typeof requestAnimationFrame>][] = [];

export const runRaceAnimation = (id: number, animationItem: HTMLElement, endpoint: number) => {
  const item = animationItem;
  let currentValue = +item.style.left.replace(/[^.0-9]/g, '');
  let race = 0;
  const animate = () => {
    const racePare = races.find((pare) => pare[0] === id);
    if (item.offsetLeft < endpoint) {
      currentValue += 5;
      item.style.left = `${currentValue}px`;
      race = requestAnimationFrame(animate);
      if (racePare) racePare[1] = race;
    } else {
      if (racePare) {
        races.splice(races.indexOf(racePare), 1);
      };
    }
  };
  race = requestAnimationFrame(animate);
  races.push([id, race]);
  console.log(races);
};

export const cleanRaceAnimation = (id: number, animItem: HTMLElement, startPosition: string) => {
  const race = races.find((pare) => pare[0] === id);
  if (race) {
    cancelAnimationFrame(race[1]);
    races.splice(races.indexOf(race), 1);
  }
  console.log(races);
  const item = animItem;
  item.style.left = startPosition;
};
