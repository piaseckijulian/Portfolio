import { socials } from '@/lib/constants';
import Button from './Button';

const Navbar = async () => {
  return (
    <nav className="xs:px-18 flex items-center justify-center bg-red-500 px-5 py-4 text-white xs:justify-between sm:px-28">
      <h3 className="text-center text-3xl font-bold xs:text-left">Julian Piasecki</h3>

      <Button
        text="My Work"
        href={socials[0].href}
        color="white"
        styles="max-xs:hidden"
      />
    </nav>
  );
};

export default Navbar;
