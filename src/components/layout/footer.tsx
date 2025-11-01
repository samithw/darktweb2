import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#mentorships', label: 'Mentorships' },
  { href: '#sierra-chart-templates', label: 'Sierra Chart' },
  { href: '#atas-templates', label: 'ATAS' },
  { href: '#mt5-templates', label: 'MT5' },
  { href: '#trading-view', label: 'Trading View' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-black">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/#home" className="flex items-center gap-2">
              <Image src="./images/dt-logo.jpg" alt="Dark Trader Logo" width={100} height={100} />
              <span className="text-xl font-bold text-white">Dark Trader</span>
            </Link>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dark Trader. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:justify-start">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}