import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const LandingPage = lazy(() => import("./screens/LandingPage/LandingPage"));
const AppLayout = lazy(() => import("./screens/AppLayout/AppLayout"));
const Contact = lazy(() => import("./screens/Contact/Contact"));
const Authenticate = lazy(() => import("./screens/Authenticate/Authenticate"));
const About = lazy(() => import("./screens/About/About"));

import BookmarkProvider from "./context/BookmarkProvider";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import Bookmark from "./components/Bookmark/Bookmark";
import CountryList from "./components/CountryList/CountryList";
import WeatherDash from "./components/WeatherDash/WeatherDash";
import ListedWeather from "./components/ListedWeather/ListedWeather";
import Spinner from "./components/Spinners/Spinner";
import UserProvider from "./context/UserProvider";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <BookmarkProvider>
      <UserProvider>
        <BrowserRouter forceRefresh={true}>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/authenticate" element={<Authenticate />} />
              <Route
                path="/app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="bookmarks" />} />
                <Route path="form" element={<Form />} />
                <Route path="bookmarks" element={<BookmarkList />} />
                <Route path="bookmarks/:id" element={<Bookmark />} />
                <Route path="listedweather" element={<ListedWeather />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="weather" element={<WeatherDash />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </UserProvider>
    </BookmarkProvider>
  );
}

export default App;
