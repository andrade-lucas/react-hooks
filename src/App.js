import React, { useState, useEffect } from 'react';
import CreateUser from './pages/CreateUser';

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived)
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

  return (
    <>
      <CreateUser />
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
