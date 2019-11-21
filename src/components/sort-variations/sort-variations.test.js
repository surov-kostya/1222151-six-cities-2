import React from 'react';
import renderer from 'react-test-renderer';
import SortVariations from 'sort-variations';
import {variations} from '../../mocks/sort-variations';

it(`SortVariations rednders correct`, () => {
  const tree = renderer.create(
      <SortVariations sortVariations={variations} activeSortVariant={variations[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
