import React, {PureComponent, createRef} from 'react';
import {placeType} from '../../mocks/offers';
import {arrayOf} from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.places = props.places;
    this._map = createRef();
  }

  render() {
    return (
      <div id="map" ref={this._map} style={{height: `100%`}}></div>
    );
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;

    if (this._map.current) {
      const map = leaflet.map(`map`, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });

      map.setView(city, zoom);

      leaflet
        .tileLayer(
            `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
            {
              attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
            })
        .addTo(map);

      this.places.forEach((place) => {
        leaflet
          .marker(place.coords, {icon})
          .addTo(map);
      });
    }
  }
}

Map.propTypes = {
  places: arrayOf(placeType)
};

export default Map;
