import React, {PureComponent} from 'react';
import {func, arrayOf} from 'prop-types';
import {variantType} from '../../mocks/sort-variations';

class SortVariations extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSortMenuShown: false
    };
    this.sortVariations = props.sortVariations;
    this.onSort = props.onSort;

    this._toggleDropdownHandler = this._toggleDropdownHandler.bind(this);
  }

  render() {
    return (
      <div className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <button className="places__sorting-type" tabIndex="0"
          style={{border: `none`, backgroundColor: `transparent`, outline: `none`}}
          onClick={this._toggleDropdownHandler}>
          {this.props.activeSortVariant && this.props.activeSortVariant.name}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </button>
        {this.state.isSortMenuShown && <ul className="places__options places__options--custom places__options--opened">
          {this.sortVariations.map((variant, i) => (
            <li
              key={variant.id}
              onClick={() => {
                this.onSort(variant.id);
                this._toggleDropdownHandler();
              }}
              className={
                variant.id === this.props.activeSortVariant.id
                  ? `places__option places__option--active`
                  : `places__option`
              }
              tabIndex={i}
            >
              {variant.name}
            </li>
          ))}
        </ul>}
      </div>
    );
  }

  _toggleDropdownHandler() {
    this.setState((prevState) => ({isSortMenuShown: !prevState.isSortMenuShown}));
  }
}

SortVariations.propTypes = {
  activeSortVariant: variantType,
  onSort: func,
  sortVariations: arrayOf(variantType)
};

export default SortVariations;