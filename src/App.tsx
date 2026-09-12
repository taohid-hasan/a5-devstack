import { Suspense } from "react";
import Banner from "./components/layouts/Banner";
import Nav from "./components/layouts/Nav";
import TechnologyCard from "../TechnologyCard";
import type { ItechnologyType } from "../../types/types";
import Footer from "./components/layouts/Footer";
import TechnologyCard from './components/TechnologyCard';
import { typeItechnologyType } from '.';


const technologiesFetch = async (): Promise<ItechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}


function App() {
  const technologiesPromise = technologiesFetch();
  return (
    <>
      <Nav />
      <Banner />
  
      <Footer />
      
    </>
  );
}

export default App
