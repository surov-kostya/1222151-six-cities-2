import React, {PureComponent, createRef} from 'react';
import {placeType, cityType} from '../../mocks/offers';
import {arrayOf} from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.places = props.places;
    this._map = createRef();
    this.map = undefined;

    this.city = props.city.coords;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
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
        center: this.city,
        zoom: this.zoom,
        zoomControl: false,
        marker: true
      });

      this.map.setView(this.city, this.zoom);

      leaflet
        .tileLayer(
            `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
            {
              attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
            })
        .addTo(this.map);

      this.places.forEach((place) => {
        leaflet
          .marker(place.coords, {icon: this.icon})
          .addTo(this.map);
      });
    }
  }

  componentDidUpdate() {
    this.map.setView(this.props.city.coords, this.zoom);
    this.props.places.forEach((place) => {
      leaflet
        .marker(place.coords, {icon: this.icon})
        .addTo(this.map);
    });
  }
}

Map.propTypes = {
  places: arrayOf(placeType),
  city: cityType
};

export default Map;
