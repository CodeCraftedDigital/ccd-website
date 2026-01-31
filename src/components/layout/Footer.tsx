import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-card border-t border-border mt-auto'>
      <div className='py-16'>
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Logo & Description */}
          <div className='flex flex-col gap-6'>
            <Logo />
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Trusted by leading agencies, Code Crafted Digital delivers
              enterprise-grade development and marketing solutions that drive
              performance, empower brands, and lead in a digital-first world.
            </p>
            <p className='text-muted-foreground text-sm'>
              High-performance websites · SEO · Custom Software
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-bold text-base tracking-wide'>
              Quick Links
            </h4>
            <ul className='flex flex-col gap-3'>
              <li>
                <Link
                  href='/'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/solutions'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/our-work'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  Our Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-bold text-base tracking-wide'>
              Contact Us
            </h4>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-start gap-3'>
                <Phone
                  size={18}
                  className='text-ccd-blue mt-0.5 shrink-0'
                  aria-hidden='true'
                />
                <a
                  href='tel:810-221-8844'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  810-221-8844
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <Mail
                  size={18}
                  className='text-ccd-blue mt-0.5 shrink-0'
                  aria-hidden='true'
                />
                <a
                  href='mailto:hello@codecrafteddigital.com'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  hello@codecrafteddigital.com
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <MapPin
                  size={18}
                  className='text-ccd-blue mt-0.5 shrink-0'
                  aria-hidden='true'
                />
                <span className='text-muted-foreground text-sm'>
                  546 E Reid Road, Grand Blanc, MI 48423
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-border py-6'>
        <div className='container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-muted-foreground text-sm'>
            © {currentYear} Code Crafted Digital
          </p>
          <nav>
            <ul className='flex items-center gap-6'>
              <li>
                <Link
                  href='/fulfillment-policy'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  Fulfillment Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms-of-service'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-muted-foreground hover:text-ccd-blue transition-colors duration-300 text-sm'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
