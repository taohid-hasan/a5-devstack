import { type Dispatch, type SetStateAction } from 'react';
import type { ITechnologyType } from '../types/types';
import StackCard from './StackCard';

interface IAllStacks {
  selected: ITechnologyType[];
  setSelected: Dispatch<SetStateAction<ITechnologyType[]>>;
}

const AllStacks = ({ selected, setSelected }: IAllStacks) => {
  const handleRemoveAllTechnologies = () => {
    setSelected([]);
  };

  if (selected.length === 0) {
    return (
      <div className="border border-[#F1F5F9] rounded-2xl p-5">
        <h5 className="font-sans font-bold text-lg mt-3 mb-2">Your Stack </h5>
        <p className="text-[#64748B] text-[12px] mb-3">
          No Technologies Selected Yet
        </p>
        <p className="border border-[#F1F5F9] rounded-xl py-6 px-15 text-center text-[#64748B]">
          Your Stack is empty
        </p>
      </div>
    );
  }

  return (
    <div className="border border-[#F1F5F9] rounded-2xl p-5">
      <h5 className="font-sans font-bold text-lg mt-3 mb-2">Your Stack </h5>
      <p className="text-[#64748B] text-[12px] mb-3">
        {selected.length} Technologies Selected Yet
      </p>
      <div>
        {selected.map((stack: ITechnologyType, index: number) => {
          return (
            <StackCard
              key={index}
              stack={stack}
              selected={selected}
              setSelected={setSelected}
            ></StackCard>
          );
        })}
      </div>
      <div className="mt-8">
        <button
          onClick={() => handleRemoveAllTechnologies()}
          className="border rounded-lg text-[#D82C20] border-[#ED8C85] w-full font-inter font-semibold text-[14px] py-2 cursor-pointer"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default AllStacks;
