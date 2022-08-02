const carsBrands:string[] = ['Porsche', 'Mazda', 'Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Nissan', 'Mercedes', 'Alfa Romeo'];
const carsModels:string[] = ['V8', 'X1', 'X2', 'X3', 'X4', 'X5', 'S5', 'S6', 'EB', 'SRX'];
let generatedCars: { name: string, color: string }[] = [];

const generateColor = () => `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;

const getRandomBrand = () => carsBrands[Math.floor(Math.random() * carsBrands.length)];

const getRandomModel = () => carsModels[Math.floor(Math.random() * carsModels.length)];

const generateCars = ():{ name: string, color: string }[] => {
  generatedCars = [];
  let counter = 0;
  while (counter < 100) {
    generatedCars.push({ name: `${getRandomBrand()} ${getRandomModel()}`, color: generateColor() });
    counter += 1;
  }
  return generatedCars;
};

export default generateCars;
