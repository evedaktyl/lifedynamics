'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // your nav items
  const navItems: [string, string][] = [
    ['Introduction', '/profile'],
    ['Our Services', '/services'],
    ['Testimonies', '/testimonies'],
    ['Gallery', '/gallery'],
    ['Contact Us', '/contact'],
  ];

  return (
    <nav className="w-full bg-grey shadow-md relative">
      <div className="w-full flex items-center justify-between px-6 py-2">
        {/* Logo flush left */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/lifedynamicslogo.png"
            alt="Life Dynamics logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex flex-wrap items-center space-x-10 text-white text-md font-medium font-logo">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="
                relative pb-1
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:w-0 before:h-0.5
                before:bg-current
                before:transition-all
                hover:before:w-full
              "
            >
              {label}
            </Link>
          ))}

          {/* Book Now button */}
          <Link
            href="/book"
            className="
              ml-4
              bg-accent-blue hover:bg-blue-600
              text-white text-sm font-semibold
              px-4 py-2 rounded-md
              transition
            "
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-grey">
          <div className="flex flex-col px-6 py-4 space-y-4 text-white text-md font-medium font-logo">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block pb-1 hover:underline"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="
                bg-accent-blue hover:bg-blue-600
                text-white text-sm font-semibold
                px-4 py-2 rounded-md
                transition
              "
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
