import React from 'react'
import { selectedAtom } from '../pages/Dashboard';
import { atom, useAtom } from 'jotai';

import CustomerTable from './CustomerTable';
import Ordertable from './Ordertable';
import TableBooking from './TableBooking';
import EventBooking from './EventBooking';
import ContactTable from './ContactTable';

function DashboardContent() {
  const [selectedOption, setSelectedOption] = useAtom(selectedAtom);

  if (selectedOption === 'dashboard') {
    return <CustomerTable></CustomerTable>
  } 
  else if (selectedOption === 'orders') {
    return <Ordertable></Ordertable>
  }
  else if (selectedOption === 'tablebookings') {
    return <TableBooking></TableBooking>
  }
  else if (selectedOption === 'eventbookings') {
    return <EventBooking></EventBooking>
  } 
  else if (selectedOption === 'contactus') {
    return <ContactTable></ContactTable>
  } 
  else {
    return <div>No content available for this option</div>;
  }
}

export default DashboardContent;