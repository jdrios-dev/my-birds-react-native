import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import {Geometry} from 'geojson';

//TODO: remove token
MapboxGL.setAccessToken(
  'pk.eyJ1IjoibXJkYW5pZWwxOTk5NiIsImEiOiJjbGFmZWN2aDYwNGhmM3Vxd2tjd3FxbHFlIn0.qUkPB3nkqHMTeI0RCt0pqg',
);

type MapProps = {
  coordinates: number[];
  isDiscoverd?: boolean;
  setCoord?: (coord: number[]) => void;
};

const Map = ({coordinates, isDiscoverd, setCoord}: MapProps) => {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  const handleMapChangePoint = (geometry: Geometry) => {
    if (isDiscoverd) {
      return null;
    }
    if (geometry.type === 'Point') {
      !isDiscoverd && setCoord ? setCoord(geometry.coordinates) : () => {};
    }
  };
  return (
    <View style={styles.mapContainer}>
      <MapboxGL.MapView
        style={styles.map}
        onPress={({geometry}) => {
          handleMapChangePoint(geometry);
        }}>
        <MapboxGL.Camera
          zoomLevel={isDiscoverd ? 3 : 1}
          centerCoordinate={coordinates}
          animationMode={'flyTo'}
          animationDuration={0}
        />
        <MapboxGL.PointAnnotation
          key="pointAnnotation"
          id="pointAnnotation"
          coordinate={coordinates}>
          <View style={styles.marker} />
        </MapboxGL.PointAnnotation>
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 270,
    backgroundColor: 'limegreen',
    marginBottom: 16,
  },
  map: {
    flex: 1,
  },
  marker: {
    height: 30,
    width: 30,
    backgroundColor: '#00ccac',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
  },
});

Map.defaultProps = {
  setCoord: null,
};

export default Map;
