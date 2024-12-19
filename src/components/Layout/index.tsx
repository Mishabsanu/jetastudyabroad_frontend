import SocialLinks from "../SocialLinks";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Nav />
      <SocialLinks />
      {children}
      <Footer />
    </>
  )
}
