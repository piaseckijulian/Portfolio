import { socials } from "@/lib/constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center xs:justify-between bg-red-500 px-5 xs:px-18 py-4 text-white sm:px-28">
      <h3 className="xs:text-left text-center font-bold text-3xl">
        Julian Piasecki
      </h3>

      <Button
        text="My Work"
        href={socials[0].href}
        color="white"
        styles="max-xs:hidden"
      />
    </nav>
  )
}

export default Navbar
