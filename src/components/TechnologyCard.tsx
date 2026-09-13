import { FaStar } from 'react-icons/fa6';
import type { ITechnologyType } from './types';
import { Icon } from '@iconify/react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { Bounce, toast } from 'react-toastify';
const TechnologyCard = ({
  technology,
  selected,
  setSelected,
}: {
  technology: ITechnologyType;
  selected: ITechnologyType[];
  setSeleted: Dispatch<SetStateAction<ITechnologyType[]>>;
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectTechnology = () => {
    setIsSelected(true);
    toast(`${technology.name} is added to stack successfully`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
    setSelected([...selected, technology]);
  };

  return (
    <div className="p-5 border border-[#F1F5F9] rounded-2xl">
      <div className="flex justify-between mt-1">
        <div>
          <Icon icon={technology.icon} />
        </div>
        <button className="px-2.5 py-0.5 bg-amber-200 font-sans rounded-full">
          {technology.badge}
        </button>
      </div>
      <h5 className="font-sans font-bold text-lg mt-3 mb-2">
        {technology.name}
      </h5>
      <p className="text-[#64748B] text-[12px] mb-5">
        {technology.description}
      </p>
      <div className="flex justify-between items-center">
        <button className="text-[#475569] bg-[#F1F5F9] font-sans py-0.5 px-2 text-[11px]">
          {technology.category}
        </button>
        <button className="font-sans text-[#475569] text-[11px]">
          {technology.difficulty}
        </button>
        <div className="flex items-center gap-x-1">
          <FaStar className="text-amber-600 text-[11px]" />
          <p className="text-[11px]">{technology.rating}</p>
        </div>
      </div>
      <button
        onClick={() => handleSelectTechnology()}
        className="bg-black text-white font-sans text-sm py-2.5 px-21.5 rounded-lg cursor-pointer w-full mt-4"
        disabled={isSelected === true ? true : false}
      >
        {isSelected === true ? 'Added to Stack Already' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;
