import Stack from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto flex justify-between items-center px-20 py-5">
      <div className="">
        <h2 className="text-6xl font-bold">Build Your Ideal</h2>
        <h2 className="text-6xl font-bold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </h2>
        <p className="mt-6 max-w-md">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-3 mt-12">
          <button className="btn bg-linear-to-r from-orange-500 to-pink-500 text-white border-0">
            Explore Technologies
          </button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div>
        <img src={Stack} alt="" />
      </div>
    </section>
  );
};

export default Banner;