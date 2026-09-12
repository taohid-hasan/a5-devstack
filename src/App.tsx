import { Suspense } from "react";
import Banner from "./components/layouts/Banner";
import Nav from "./components/layouts/Nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnologie } from "./types/technologie";
import Footer from "./components/layouts/Footer";


const technologiesFetch = async (): Promise<Itechnologie[]> => {
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
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
      
    </>
  );
}

export default App
