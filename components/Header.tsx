import client from '@/sanityClient';
import Button from './Button';

const Header = async () => {
  const { name, github_url } = await client.fetch(`*[_type == "general"]{
    name,
    github_url
  }[0]`);

  return (
    <header className="xs:px-18 flex items-center justify-center bg-red-500 px-5 py-4 text-white xs:justify-between sm:px-28">
      <h3 className="text-center text-3xl font-bold xs:text-left">{name}</h3>

      <Button text="My Work" href={github_url} color="white" styles="max-xs:hidden" />
    </header>
  );
};

export default Header;
