import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import InfoCard from '../components/InfoCard';
import MapScreen from '../components/Map';
import { format } from 'date-fns';
function Search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatedStartDate = format(new Date(startDate), 'dd MMM yy');
  const formatedEndDate = format(new Date(endDate), 'dd MMM yy');
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div className="h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
          <div className="flex flex-col">
            {searchResult.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex">
          <MapScreen />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (response) => response.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}
