import Logo from "../ui/Logo";
import Container from "./Container";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    <header className='bg-card border-b border-border'>
      <Container className='py-6 flex items-center justify-between'>
        <Logo />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
};

export default Header;
