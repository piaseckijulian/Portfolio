import { socials } from '@/lib/constants';
import Link from 'next/link';

const Footer = async () => {
  return (
    <footer className="xs:px-18 mt-10 flex flex-col items-center justify-between px-5 py-5 text-white xs:flex-row sm:px-28">
      <h3 className="mb-2 text-2xl font-bold text-white max-xs:text-center xs:mb-0 xs:text-3xl">
        Julian Piasecki
      </h3>

      <div className="flex gap-4">
        {socials.map(({ text, href, icon: Icon }) => (
          <Link
            href={href}
            key={href}
            className="text-xl transition hover:text-red-500 xs:text-3xl"
            target="_blank"
            aria-label={text}
          >
            <Icon />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
