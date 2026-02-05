"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/Logo";
import CallToActionButtons from "./CallToActionButtons";
import { navigationLinks } from "@/lib/data/primary.navigation";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger
        aria-label='Open main menu'
        className='lg:hidden p-2 border border-white rounded-md hover:bg-white/10 transition-colors'
      >
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className='bg-card p-4'>
        <SheetHeader>
          <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
          <Logo />
        </SheetHeader>

        <nav className='flex flex-col gap-4 mt-8'>
          {navigationLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className='text-lg hover:text-ccd-blue transition-colors'
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className='flex flex-col gap-3 w-full mt-8'>
          <CallToActionButtons />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
