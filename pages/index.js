import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] });

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <div className="h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Head>
          <title>Airbnb</title>
        </Head>
        <Header />
        <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Near by</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {' '}
              {exploreData.map((item) => (
                <SmallCard
                  key={item.img}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide">
              {cardsData.map((item) => (
                <MediumCard key={item.img} img={item.img} title={item.title} />
              ))}
            </div>
          </section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Gratest OutDoor"
            description="Created by Satish Marutham"
            buttonText="Get Inspired"
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await res.json();
  const response = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const cardsData = await response.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
