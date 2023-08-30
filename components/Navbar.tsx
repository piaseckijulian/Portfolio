import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center bg-white px-5 py-7 shadow-md dark:bg-darkClr dark:shadow-white/5 xs:justify-between md:px-10 lg:px-36">
      <h3 className="gradient -letter-spacing-[1px] cursor-pointer text-[20px] font-bold xs:text-[32px]">
        Julian Piasecki
      </h3>

      <nav>
        <ul className="hidden gap-6 lg:flex">
          {navLinks.map(({ title, href }) => (
            <li key={title}>
              <Link
                href={href}
                className="text-grayish transition duration-500 hover:text-purple-700 dark:text-darkGrayish"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href="https://linkedin.com/"
        target="_blank"
        className="rounded-full bg-violet-500 px-10 py-3 text-white transition duration-500 ease-in-out hover:bg-purple-700 max-xs:hidden md:text-lg"
      >
        Hire Me!
      </Link>
    </header>
  );
};

export default Navbar;
