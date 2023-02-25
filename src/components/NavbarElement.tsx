interface NavbarElementProps {
  text: String;
}

const NavbarElement = ({ text }: NavbarElementProps) => {
  return (
    <a
      href={`#${text.toLowerCase()}`}
      className='text-white p-2 rounded hover:bg-black'
    >
      {text}
    </a>
  );
};

export default NavbarElement;
