import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import LandingPage from "../pages/LandingPage";
import NewBooking from "../pages/booking/booking process/NewBooking";
import { AvailableFlights } from "../pages/booking/booking process/AvailableFlights";
import FlightSeating from "../pages/booking/booking process/FlightSeating";
import BookingSummery from "../pages/booking/booking process/BookingSummery";
import Checkout from "../pages/booking/booking process/Checkout";
import BordingSucess from "../pages/booking/booking process/BordingSucess";

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage/>} />
      <Route path="/booking/new" element={ <NewBooking/> } />
      <Route path="/booking/flights" element={ <AvailableFlights/> } />
      <Route path="/booking/seat" element={ <FlightSeating/> } />
      <Route path="/booking/summery" element={ <BookingSummery/> } />
      <Route path="/booking/pay" element={ <Checkout/>} />
      <Route path="/booking/boarding" element={ <BordingSucess/>} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Route>
  )
);

export default Routes;