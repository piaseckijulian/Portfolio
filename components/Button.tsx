import Link from 'next/link';

interface Props {
  text: string;
  href: string;
  color: 'white' | 'red';
  styles?: string;
}

const Button = ({ text, href, color, styles }: Props) => {
  const colors =
    color === 'white'
      ? 'bg-white text-red-500 hover:opacity-90'
      : 'bg-red-500 text-white hover:opacity-80';

  return (
    <Link
      href={href}
      target="_blank"
      className={`inline-block px-3 py-1 text-xl font-semibold transition xs:text-2xl sm:px-6 sm:py-2 ${colors} ${styles}`}
    >
      {text}
    </Link>
  );
};

export default Button;
