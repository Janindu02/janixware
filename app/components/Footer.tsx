import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Janixware Logo"
                width={200}
                height={70}
                className="h-14 w-auto mb-4"
              />
            </div>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Building simple and smart software solutions for a better
              tomorrow.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label={social}
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <span className="text-xs">{social[0]}</span>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>info@janixware.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Software Ave, Tech City, TX 78701</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & Resources Columns */}
          <div className="grid grid-cols-2 gap-6 md:block">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-slate-900 mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#services" className="hover:text-blue-600 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-600 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-blue-600 transition-colors">
                    Process
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#clients" className="hover:text-blue-600 transition-colors">
                    Clients
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-blue-600 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Janixware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

