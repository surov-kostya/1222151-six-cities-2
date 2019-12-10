import React, {PureComponent, createRef} from 'react';
import {placeType} from '../../models/index';
import {arrayOf, number} from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = createRef();
    this.map = undefined;

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this.zoom = 12;
  }

  render() {
    return (
      <div id="map" ref={this._map} style={{height: `100%`}}></div>
    );
  }

  componentDidMount() {
    if (this._map.current) {
      this.map = leaflet.map(`map`, {
        center: this.props.cityCoords,
        zoom: this.zoom,
        zoomControl: false,
        marker: true
      });

      this.map.setView(this.props.cityCoords, this.zoom);

      leaflet
        .tileLayer(
            `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
            {
              attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
            })
        .addTo(this.map);

      this.props.places.forEach((place) => {
        leaflet
          .marker(place.coords, {icon: this.icon})
          .addTo(this.map);
      });
    }
  }

  componentDidUpdate() {
    this.map.setView(this.props.cityCoords, this.zoom);
    this.props.places.forEach((place) => {
      leaflet
        .marker(place.coords, {icon: this.props.activePlace && place.id === this.props.activePlace ? this.activeIcon : this.icon})
        .addTo(this.map);
    });
  }
}

Map.propTypes = {
  places: arrayOf(placeType),
  cityCoords: arrayOf(number),
  activePlace: number
};

export default Map;
