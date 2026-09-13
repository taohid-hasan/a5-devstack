import { use, useState } from 'react';
import TechnologyCard from '../TechnologyCard';
import type { ITechnologyType } from '../../types/types';

import AllStacks from '../AllStack';

interface Iprops {
  technologyPromise: Promise<ITechnologyType[]>;
}

const Explore = ({ technologyPromise }: Iprops) => {
  const technologies = use(technologyPromise);

  const [selected, setSelected] = useState<ITechnologyType[]>([]);

  return (
    <section className="container mx-auto">
      <h2 className="font-inter text-4xl font-extrabold text-center lg:text-left">
        Explore the{' '}
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-transparent bg-clip-text">
          Technologies
        </span>{' '}
      </h2>
      <p className="text-[#64748B] text-base font-sans mt-2 mb-10 text-center lg:text-left">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="lg:flex gap-5">
        <div className="lg:w-3/4">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {technologies.map((technology, index) => {
              return (
                <TechnologyCard
                  selected={selected}
                  setSelected={setSelected}
                  key={index}
                  technology={technology}
                ></TechnologyCard>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/4">
          <AllStacks selected={selected} setSelected={setSelected}></AllStacks>
        </div>
      </div>
    </section>
  );
};

export default Explore;
