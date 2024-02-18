import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import AppLayout from "./screens/AppLayout/AppLayout";
import BookmarkProvider from "./context/BookmarkProvider";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import Bookmark from "./components/Bookmark/Bookmark";
import CountryList from "./components/CountryList/CountryList";
import WeatherDash from "./components/WeatherDash/WeatherDash";
import ListedWeather from "./components/ListedWeather/ListedWeather";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import UserProvider from "./context/UserProvider";
import Authenticate from "./screens/Authenticate/Authenticate";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <BookmarkProvider>
      <UserProvider>
        <BrowserRouter forceRefresh={true}>
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
        </BrowserRouter>
      </UserProvider>
    </BookmarkProvider>
  );
}

export default App;
