import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const { resetRoomFilterData } = useRoomContext();

  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 50
        ? setHeader(true)
        : setHeader(false)
    );
  });

  const navLinks = ['Home', 'Rooms', 'Restaurant', 'Contact'];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >

      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>

        {/* Logo */}
        <Link to="/" onClick={resetRoomFilterData}>
          {
            header
              ? <img className='w-[160px]' src="src/assets/img/StayWise/logo-dark.png" alt="Logo Dark" />
              : <img className='w-[160px]' src="src/assets/img/StayWise/logo-light.png" alt="Logo White" />
          }
        </Link>

        {/* Nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
        flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
          {
            navLinks.map(link =>
              <Link to="/" className='transition hover:text-accent' key={link}>
                {link}
              </Link>
            )
          }
        </nav>

      </div>

    </header>
  );
};

export default Header;
