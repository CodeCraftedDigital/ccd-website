import Logo from "../ui/Logo";
import Container from "./Container";

const Header = () => {
  return (
    <header className='bg-card border-b border-border'>
      <Container className='py-6'>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
