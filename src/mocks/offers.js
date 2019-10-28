import {shape, number, string} from 'prop-types';

export const placeType = shape({
  id: number,
  name: string,
  imageSrc: string
});

export const places = [
  {
    id: 0,
    name: `Beautiful && luxurious apartment at great location`,
    imageSrc: `img/apartment-01.jpg`
  },
  {
    id: 1,
    name: `Wood and stone place`,
    imageSrc: `img/apartment-02.jpg`

  },
  {
    id: 2,
    name: `Nice, cozy, warm big bed apartment`,
    imageSrc: `img/apartment-03.jpg`
  },
  {
    id: 3,
    name: `Canal View Prinsengracht`,
    imageSrc: `img/room.jpg`
  }
];
