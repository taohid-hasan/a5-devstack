import Logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-10 px-18 py-5">
      <div className="grid grid-cols-5">
        <div className="col-span-2 gap-7 grid justify-between">
          <img src={Logo} alt="" />

          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-3">
            <ul>
              <a href="#">GitHub</a>
            </ul>
            <ul>
              <a href="#">Twitter</a>
            </ul>
            <ul>
              <a href="#">Linkedin</a>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="py-3 font-bold">PRODUCT</h4>
          <ul>
            <a href="Home">Home</a>
          </ul>
          <ul>
            <a href="Technologies">Technologies</a>
          </ul>
          <ul>
            <a href="Projects">Projects</a>
          </ul>
        </div>

        <div>
          <h4 className="py-3 font-bold">COMPANY</h4>
          <ul>
            <a href="#">About</a>
          </ul>
          <ul>
            <a href="#">Contact</a>
          </ul>
          <ul>
            <a href="">Careers</a>
          </ul>
        </div>

        <div>
          <h4 className="py-3 font-bold">LEGAL</h4>
          <ul>
            <a href="#">Privacy Policy</a>
          </ul>
          <ul>
            <a href="#">Terms of Service</a>
          </ul>
        </div>
      </div>

      <div className="">
        <hr className="text-gray-300 pb-10" />
        <div className="flex justify-between">
          <ul>
            <a href="#">© 2026 Dev Stack. All rights reserved.</a>
          </ul>

          <div className="flex gap-4">
            <ul>
              <a href="#">Privacy</a>
            </ul>
            <ul>
              <a href="#">Terms</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
