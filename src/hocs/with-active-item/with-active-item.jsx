import React, {PureComponent} from 'react';
import {number, element} from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {activeItem: props.activeItem};
      this._handleItemSelect = this._handleItemSelect.bind(this);
    }

    render() {
      const activeItem = this.state.activeItem;
      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onSelect={(itemId) => this._handleItemSelect(itemId)}
        />
      );
    }

    _handleItemSelect(itemId) {
      this.setState({activeItem: itemId});
    }
  }

  WithActiveItem.propTypes = {
    activeItem: number
  };

  return WithActiveItem;
};

withActiveItem.propTypes = {
  Component: element
};

export default withActiveItem;
