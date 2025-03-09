import "./App.scss";
import { useState, useEffect } from "react";
import { LocationContext } from "./provider/locationProvider";

import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { Sidebar } from "./components/sidebar/sidebar";
import { MainContainer } from "./components/mainContainer/mainContainer";

// all my routes
import { AppRoutes } from "./routes/appRoutes";

function App() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      const message = "Geolocation is not supported by this browser.";
      console.error(message);
    }
  };

  return (
    <LocationContext.Provider value={location}>
      <MainContainer>
        <Sidebar getLocation={getLocation} />
        <Main>
          <AppRoutes />
        </Main>
      </MainContainer>
      <Footer />
    </LocationContext.Provider>
  );
}

export default App;
