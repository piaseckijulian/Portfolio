import { socials } from "@/lib/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-10 flex xs:flex-row flex-col items-center justify-between px-5 xs:px-18 py-5 text-white sm:px-28">
      <h3 className="mb-2 xs:mb-0 font-bold text-2xl text-white xs:text-3xl max-xs:text-center">
        Julian Piasecki
      </h3>

      <div className="flex gap-4">
        {socials.map(({ text, href, icon: Icon }) => (
          <Link
            href={href}
            key={href}
            className="text-xl xs:text-3xl transition hover:text-red-500"
            target="_blank"
            aria-label={text}
          >
            <Icon />
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
