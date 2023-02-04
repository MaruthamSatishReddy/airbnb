import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatedStartDate = format(new Date(startDate), 'dd MMM yy');
  const formatedEndDate = format(new Date(endDate), 'dd MMM yy');
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Header placeHolder={`${location} | ${range} | ${noOfGuests} `} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} for {noOfGuests} as Guests
          </p>
          <h className="text-xl font-semibold mt-2 mb-1">Stays in {location}</h>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 py-2 ml-20">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
