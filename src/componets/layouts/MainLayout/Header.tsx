/**
 * Header component that displays the application's name.
 *
 * This component renders a blue header bar with the text "Mi Aplicación",
 * centered horizontally.
 *
 * @returns {JSX.Element} The Header component
 */
const Header = (): JSX.Element => {
  return (
    <header className="bg-blue-500 w-full p-4 h-20 flex justify-center">
      <nav className=" container ">
        <span className="text-white font-bold text-xl">Mi Aplicación</span>
      </nav>
    </header>
  );
};

export default Header;
