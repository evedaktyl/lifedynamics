// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-surface text-neutral-text font-body py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <Link href="/profile">Profile</Link>
          <Link href="/services">Services</Link>
          <Link href="/testimonies">Testimonies</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book">Book</Link>
        </nav>

        {/* Contact info + copyright */}
        <div className="text-center md:text-right text-xs">
          <p>Celine Veron Chai</p>
          <p>
            <a href="mailto:enquiries@lifedynamicstraining.com" className="hover:underline">
              enquiries@lifedynamicstraining.com
            </a>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Life Dynamics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
