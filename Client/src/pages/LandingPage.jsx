import BottomNavbar from "../Components/BottomNavbar/BottomNavbar";
import { useState } from "react";
import { PAGES } from "../configs/constants";
import Home from "./Home";
import NewBooking from "./booking/booking process/NewBooking";

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  const pageChnageHandle = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      { currentPage === PAGES.HOME && <Home />}
      { currentPage === PAGES.BOOKINGS && <NewBooking />}
      <BottomNavbar currentPage={currentPage} setPage={pageChnageHandle} />
    </>
  );
};

export default LandingPage;
