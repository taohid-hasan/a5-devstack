import Logo from '../../assets/logo-text.png';

const Nav = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between px-8 py-4">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>
            <a href="#" className='text-pink-600'>Home</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div>
          <button className="btn bg-transparent border-none shadow-none">
            Sign In
          </button>
          <button className="btn btn-active btn-secondary rounded-[50px]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
