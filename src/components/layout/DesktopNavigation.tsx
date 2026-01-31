import Link from "next/link";
import { Button } from "../ui/button";

interface NavigationLinks {
  id: number;
  title: string;
  href: string;
}

const navigationLinks: NavigationLinks[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Solutions",
    href: "/solutions",
  },
  {
    id: 4,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    title: "Our Work",
    href: "/our-work",
  },
];

const DesktopNavigation = () => {
  return (
    <div className='hidden lg:flex items-center gap-8'>
      <nav>
        <ul className='flex gap-8'>
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <Link
                className='hover:text-ccd-blue hover:transition-colors'
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex items-center gap-4'>
        <Button
          asChild
          className='text-base bg-white text-black hover:bg-gray-200'
        >
          <Link
            target='_blank'
            href='https://fantastical.app/andrewnichols/code-crafted-digital'
          >
            Book A Call
          </Link>
        </Button>
        <Button
          asChild
          className='text-base bg-ccd-blue text-white hover:bg-ccd-blue-dark'
        >
          <Link href='/contact'>Get A Quote</Link>
        </Button>
      </div>
    </div>
  );
};

export default DesktopNavigation;
