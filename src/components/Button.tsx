import Link from "next/link"

interface Props {
  text: string
  href: string
  color: "white" | "red"
  styles?: string
}

const Button = ({ text, href, color, styles }: Props) => {
  const colors =
    color === "white"
      ? "bg-white text-red-500 hover:opacity-90"
      : "bg-red-500 text-white hover:opacity-80"

  return (
    <Link
      href={href}
      target="_blank"
      className={`inline-block px-3 py-1 font-semibold text-xl ${colors} xs:text-2xl transition sm:px-6 sm:py-2 ${styles}`}
    >
      {text}
    </Link>
  )
}

export default Button
