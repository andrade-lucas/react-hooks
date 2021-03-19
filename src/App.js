import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

import store from './store';

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
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>

      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
