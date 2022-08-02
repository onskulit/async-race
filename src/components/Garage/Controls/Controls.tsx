import React from 'react';
import GenerateCars from './Buttons/GenerateCars';
import Race from './Buttons/Race';
import Reset from './Buttons/Reset';
import Create from './Create/Create';
import Update from './Update/Update';

interface ControlsProps {
  setCar({ name, color }: { name: string, color: string}): void;
}
function Controls({ setCar }: ControlsProps) {
  return (
    <div className="w-[360px] flex flex-col mb-3 mx-auto text-lg">
      <Create setCar={setCar} />
      <Update />
      <div className="flex items-center gap-2">
        <Race />
        <Reset />
        <GenerateCars />
      </div>
    </div>
  );
}

export default Controls;
