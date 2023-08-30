import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 px-5 xs:mt-20 md:px-10 lg:px-36">
      <div className="footer-wrapper">
        <h3 className="gradient text-xl font-bold -tracking-[1px] xs:text-2xl">
          Julian Piasecki
        </h3>

        <div className="flex items-center gap-6 max-xs:mt-4">
          {footerLinks.map(({ href, icon: Icon }) => (
            <Link href={href} key={href} target="_blank">
              <Icon
                className="h-4 w-4 transition duration-500 ease-in-out
          hover:fill-purple-700 dark:fill-white xs:h-8 xs:w-8"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
