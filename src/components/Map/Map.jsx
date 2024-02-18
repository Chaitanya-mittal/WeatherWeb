import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
  Popup,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useBookmarkProvider } from "../../context/BookmarkProvider";
import useGeolocation from "../../hooks/useGeolocation";
import Button from "../Button/Button";
import useUrlPosition from "../../hooks/useUrlPosition";
import UserPanel from "../UserPanel/UserPanel";

function Map() {
  const [center, setCenter] = useState([51.505, -0.09]);
  const { bookmarks } = useBookmarkProvider();
  const {
    position: geolocationPosition,
    loading: geolocationLoading,
    error: geolocationError,
    getLocation,
  } = useGeolocation();
  const { lat, lng } = useUrlPosition();

  function handleClick() {
    getLocation();
  }
  useEffect(() => {
    if (lat && lng) {
      setCenter([lat, lng]);
    }
  }, [lat, lng]);

  useEffect(() => {
    geolocationPosition && setCenter(geolocationPosition);
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      <Button type="position" click={handleClick}>
        {geolocationLoading && "Loading.."}
        {geolocationError && "Try Again"}
        {!geolocationError && !geolocationLoading && "Current Location"}
      </Button>

      <UserPanel />
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {bookmarks &&
          bookmarks.map((b) => {
            return (
              <Marker position={b.position} key={b.id}>
                <Popup>{b.note}</Popup>
              </Marker>
            );
          })}
        <ChangeCenter mapCenter={center} />
        <OnClickMap ChangeCenter={setCenter} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ mapCenter }) {
  const map = useMap();
  map.setView(mapCenter);
  return null;
}

function OnClickMap({ ChangeCenter }) {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      const newP = Object.values(e.latlng);
      newP && navigate(`weather?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
  return null;
}
export default Map;

// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
