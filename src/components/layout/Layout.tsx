import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import PageTransition from "./PageTransition";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <PageTransition>
        <main className="min-h-screen">{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Layout;
