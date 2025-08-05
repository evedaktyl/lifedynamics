'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-grey shadow-md">
      <div className="w-full flex items-center justify-between px-6 py-3">
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

        {/* Nav links flush right */}
        <div className="flex items-center space-x-10 text-white text-md font-medium font-logo">
          {[
            ['Introduction', '/profile'],
            ['Our Services', '/services'],
            ['Testimonies', '/testimonies'],
            ['Gallery', '/gallery'],
            ['Contact Us', '/contact'],
          ].map(([label, href]) => (
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

          {/* Book Button */}
          <Link
            href="/book"
            className="
              ml-4
              bg-accent-blue hover:bg-blue-600
              text-white text-sm font-semibold
              px-4 py-2 rounded-md
              transition mr-10
            "
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
