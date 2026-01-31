import Link from "next/link";
import CallToActionButtons from "./CallToActionButtons";
import { navigationLinks } from "@/lib/data/primary.navigation";
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
        <CallToActionButtons />
      </div>
    </div>
  );
};

export default DesktopNavigation;
