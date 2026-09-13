import { Suspense, useState } from 'react';
import Banner from './components/layouts/Banner';
import Explore from './components/layouts/Explore';
import Navbar from './components/layouts/Nav';
import type { ITechnologyType } from './types/types';
import { ToastContainer } from 'react-toastify';
import Footer from './components/layouts/Footer';
const technologyFetch = async (): Promise<ITechnologyType[]> => {
  const res = await fetch('./data.json');
  const data = await res.json();
  return data;
};

function App() {
  const [technologyPromise] = useState(() => technologyFetch());

  return (
    <>
      <section className="lg:px-10 px-2">
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense
          fallback={<h2 className="text-center text-3xl">Loading Data...</h2>}
        >
          <Explore technologyPromise={technologyPromise}></Explore>
        </Suspense>
        <ToastContainer />
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
