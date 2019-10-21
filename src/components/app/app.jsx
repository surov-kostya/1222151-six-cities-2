import React from 'react';
import Main from '../main/main';

const App = () => {
  return (
    <Main places={[
      {
        id: 0,
        name: `Beautiful && luxurious apartment at great location`
      },
      {
        id: 1,
        name: `Wood and stone place`
      },
      {
        id: 2,
        name: `Nice, cozy, warm big bed apartment`
      },
      {
        id: 3,
        name: `Canal View Prinsengracht`
      }
    ]}
    onTitleClick={() => {}}
    />
  );
};

export default App;
