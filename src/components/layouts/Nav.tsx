import Logo from '../../assets/logo-text.png';

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
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
