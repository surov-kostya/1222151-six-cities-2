import {shape, number, string, arrayOf} from 'prop-types';

export const personType = shape({
  id: number.isRequired,
  name: string.isRequired,
  avatarSrc: string,
  status: string
});

export const reviewType = shape({
  id: number.isRequired,
  author: personType.isRequired,
  rating: number.isRequired,
  text: string.isRequired,
  creationDate: string.isRequired
});

export const placeType = shape({
  id: number,
  name: string,
  imageSrc: string,
  contacts: shape({eMail: string}),
  gallerySrcs: arrayOf(string),
  mark: string,
  rating: number,
  parametres: shape({
    place: string,
    bedrooms: number,
    adults: number
  }),
  price: number,
  features: arrayOf(string),
  host: personType.isRequired,
  hostsReview: arrayOf(string),
  coords: arrayOf(number),
  reviews: arrayOf(reviewType)
});

export const cityType = shape({
  id: number,
  name: string,
  coords: arrayOf(number)
});


export const cities = [
  {
    id: 0,
    name: `Paris`,
    coords: [48.856663, 2.351556],
    places: [
      {
        id: 0,
        name: `Beautiful && luxurious apartment at great location`,
        imageSrc: `img/apartment-01.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/map.jpg`],
        mark: `Premium`,
        rating: 2.1,
        parametres: {
          place: `Entire`,
          bedrooms: 3,
          adults: 4
        },
        price: 20,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [48.859484, 2.370788],
        neighborIds: [1, 2, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 1,
        name: `Wood and stone place`,
        imageSrc: `img/apartment-02.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 3.9,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 132,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [48.839712, 2.364584],
        neighborIds: [0, 2, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 2,
        name: `Nice, cozy, warm big bed apartment`,
        imageSrc: `img/apartment-03.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 5.0,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 180,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [48.850228, 2.316523],
        neighborIds: [0, 1, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 3,
        name: `Canal View Prinsengracht`,
        imageSrc: `img/room.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 1.0,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 112,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [48.879653, 2.320495],
        neighborIds: [0, 1, 2],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: `Cologne`,
    coords: [50.930779, 6.938399],
    places: [
      {
        id: 0,
        name: `Beautiful && luxurious apartment at great location`,
        imageSrc: `img/apartment-01.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/map.jpg`],
        mark: `Premium`,
        rating: 2.1,
        parametres: {
          place: `Entire`,
          bedrooms: 3,
          adults: 4
        },
        price: 30,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [50.913738, 6.939931],
        neighborIds: [1, 2, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 1,
        name: `Wood and stone place`,
        imageSrc: `img/apartment-02.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 3.0,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 32,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [50.947406, 6.892225],
        neighborIds: [0, 2, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 2,
        name: `Nice, cozy, warm big bed apartment`,
        imageSrc: `img/apartment-03.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 3.8,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 10,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [50.978620, 6.935224],
        neighborIds: [0, 1, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 3,
        name: `Canal View Prinsengracht`,
        imageSrc: `img/room.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 5.0,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 1122,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [50.973473, 7.014187],
        neighborIds: [0, 1, 2],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: `Brussels`,
    coords: [50.851309, 4.351718],
    places: [
      {
        id: 0,
        name: `Beautiful && luxurious apartment at great location`,
        imageSrc: `img/apartment-01.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/map.jpg`],
        mark: `Premium`,
        rating: 0.5,
        parametres: {
          place: `Entire`,
          bedrooms: 3,
          adults: 4
        },
        price: 1120,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [50.844429, 4.345542],
        neighborIds: [1, 2, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 1,
        name: `Wood and stone place`,
        imageSrc: `img/apartment-02.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 4.9,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 1323,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [50.846726, 4.383440],
        neighborIds: [0, 2, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 2,
        name: `Nice, cozy, warm big bed apartment`,
        imageSrc: `img/apartment-03.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 3.5,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 1800,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [50.871478, 4.346146],
        neighborIds: [0, 1, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 3,
        name: `Canal View Prinsengracht`,
        imageSrc: `img/room.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 2.5,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 1142,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [50.892903, 4.374973],
        neighborIds: [0, 1, 2],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: `Amsterdam`,
    coords: [52.38333, 4.9],
    places: [
      {
        id: 0,
        name: `Beautiful && luxurious apartment at great location`,
        imageSrc: `img/apartment-01.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/map.jpg`],
        mark: `Premium`,
        rating: 1.5,
        parametres: {
          place: `Entire`,
          bedrooms: 3,
          adults: 4
        },
        price: 40,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [52.3909553943508, 4.85309666406198],
        neighborIds: [1, 2, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 1,
        name: `Wood and stone place`,
        imageSrc: `img/apartment-02.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 4.9,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 1432,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [52.369553943508, 4.85309666406198],
        neighborIds: [0, 2, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 2,
        name: `Nice, cozy, warm big bed apartment`,
        imageSrc: `img/apartment-03.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 3.8,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 1804,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [52.3909553943508, 4.929309666406198],
        neighborIds: [0, 1, 3],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      },
      {
        id: 3,
        name: `Canal View Prinsengracht`,
        imageSrc: `img/room.jpg`,
        contacts: {
          eMail: `Oliver.conner@gmail.com`
        },
        gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        mark: `Premium`,
        rating: 4.0,
        parametres: {
          entire: `Entire place`,
          bedrooms: 3,
          adults: 4
        },
        price: 4112,
        features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          id: 100,
          name: `Angelina`,
          status: `Pro`
        },
        hostsReview: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        coords: [52.3809553943508, 4.939309666406198],
        neighborIds: [0, 1, 2],
        reviews: [
          {
            id: 100,
            author: {
              id: 1000,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-24`
          },
          {
            id: 101,
            author: {
              id: 1001,
              name: `Angelina`,
              avatarSrc: `img/avatar-angelina.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-25`
          },
          {
            id: 102,
            author: {
              id: 1002,
              name: `Max`,
              avatarSrc: `img/avatar-max.jpg`
            },
            rating: 94,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            creationDate: `2019-04-26`
          }
        ]
      }
    ]
  }
];
