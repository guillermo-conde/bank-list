import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
