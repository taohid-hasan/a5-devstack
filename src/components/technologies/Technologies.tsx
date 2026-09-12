import React, { use } from 'react';

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnologie[]>
}

const Technologies = ({ technologiesPromise }:TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies, "technologies");
  return <div></div>;
};

export default Technologies;