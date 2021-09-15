import React from 'react';
import { useQuery } from '@apollo/client';
import GuestCount from "../components/DashboardComps/GuestCount"
import Date from "../components/DashboardComps/Date"
import LateCheckout from "../components/DashboardComps/LateCheckout"
import YourGuests from "../components/DashboardComps/YourGuests"


const Home = () => {
 
  return (
   <div className="home-wrapper">
     {/* <GuestCount></GuestCount> */}
   </div>
  );
};

export default Home;
