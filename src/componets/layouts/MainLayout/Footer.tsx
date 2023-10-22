/**
 * Footer component that displays the copyright text.
 *
 * This component renders a dark gray footer bar with white text,
 * centered horizontally and vertically, indicating the copyright information.
 *
 * @returns {JSX.Element} The Footer component
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full p-4 text-white text-center">
      © 2023 Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
