import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  activePage?: string;
}

export default function Navigation({ activePage }: NavigationProps) {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Process", href: "/process" },
    { name: "Clients", href: "/clients" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Janixware Logo"
              width={200}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-blue-600 transition-colors font-medium ${
                  activePage === item.name ? "text-blue-600" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get a Call Button */}
          <button className="hidden sm:inline-flex px-5 py-2 rounded-full bg-transparent text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors border border-slate-300 hover:border-blue-400">
            Get a Call
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

