import { createContext } from 'react';
import { DecOrInc } from '../types/enums';

interface IGaragePageContext {
  updatePage?(operation: DecOrInc): void;
}
export const GaragePageContext = createContext<IGaragePageContext>({});

export const WinnersPageContext = createContext({});
