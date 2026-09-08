import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { applyTheme } from "./redux/features/themes/themesSlice";

// *layout*
import MainLayout from "./components/layout/MainLayout";

// *pages*
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Protfolio";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";


function App() {

  const {
    generalColorId,
    generalFontId,
    generalThemeMode,
  } = useSelector((state) => state.themes);

  useEffect(() => {
    applyTheme(
      generalColorId,
      generalFontId,
      generalThemeMode
    );
  }, [ generalColorId, generalFontId, generalThemeMode ]);


  return (
    <Routes>

      <Route
        path="/"
        element={<MainLayout />}
      >

        <Route
          index
          element={<Navigate to="home" />}
        />
        <Route
          path="home"
          element={<Home />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="portfolio"
          element={<Portfolio />}
        />
        <Route
          path="services"
          element={<Services />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<Home />}
        />

      </Route>

    </Routes>
  );
}


export default App;