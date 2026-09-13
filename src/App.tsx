import { Suspense, useState } from 'react';
import './App.css';
import Banner from './layouts/Banner';
import Explore from './layouts/Explore';
import Navbar from './layouts/Navbar';
import type { ITechnologyType } from './types/types';
import { ToastContainer } from 'react-toastify';
import Footer from './layouts/Footer';
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
