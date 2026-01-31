import Logo from "../ui/Logo";

const Header = () => {
  return (
    <header className='bg-card border-b border-border'>
      <div className='container mx-auto px-4 py-6'>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
