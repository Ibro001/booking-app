import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import Layouts from "./layout/Layouts";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

const App = () => {

  const {isLoggedIn} = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts><p>Home Page</p></Layouts>}/>
        <Route path="/register" element={<Layouts><Register /></Layouts>} />
        <Route path="/sign-in" element={<Layouts><SignIn /></Layouts>} />

        {isLoggedIn && (<>
          <Route path="/hotel/:hotelId/booking" element={<Layouts><Booking /></Layouts>} />
          <Route path="/add-hotel" element={<Layouts><AddHotel /></Layouts>} />
          <Route path="/my-hotels" element={<Layouts><MyHotels /></Layouts>} />
          <Route path="/edit-hotel/:hotelId" element={<Layouts><EditHotel /></Layouts>} />
          <Route path="/search" element={<Layouts><Search /></Layouts>} />
          <Route path="/detail/:hotelId" element={<Layouts><Detail /></Layouts>} />
          <Route path="/my-bookings" element={<Layouts><MyBookings /></Layouts>} />
        </>)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
