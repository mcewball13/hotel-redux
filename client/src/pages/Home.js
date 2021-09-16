import React from 'react';
import { useQuery } from '@apollo/client';
import GuestCount from "../components/DashboardComps/GuestCount"
import Date from "../components/DashboardComps/Date"
import LateCheckout from "../components/DashboardComps/LateCheckout"
import YourGuests from "../components/DashboardComps/YourGuests"


const Home = () => {
 
  return (
   <div className="home-wrapper">
     <div className="flex-container-row around" id="guest-count-wrapper">
     <GuestCount></GuestCount>
     </div>
   </div>
  );
};

export default Home;
