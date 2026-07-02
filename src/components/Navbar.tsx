/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { CONTACT_TEL_LINK, CONTACT_PHONE } from '../data.ts';
import theCaveLogo from '../assets/the-cave-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "FILOSOFIA", href: "#box-philosophy" },
    { name: "COMMUNITY", href: "#community" },
    { name: "CORSI", href: "#programmi" },
    { name: "SEDI", href: "#sedi" },
    { name: "ORARI", href: "#orari" },
    { name: "COACH", href: "#coaches" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#070706]/95 backdrop-blur-md border-[#f2c200]/20 py-3' 
          : 'bg-transparent border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center space-x-2 select-none"
        >
          <div className="flex flex-col gap-0.5">
            <img
              src={theCaveLogo}
              alt="THE CAVE"
              draggable={false}
              className="h-8 w-auto pointer-events-none select-none"
            />
            <span className="font-sans text-[9px] tracking-[0.25em] text-white/50 leading-none">
              CROSSFIT & HYROX
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-sans text-sm font-semibold tracking-wider text-white/70 hover:text-brand-yellow hover:translate-x-0.5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Prova Gratis Button */}
        <div className="hidden sm:block">
          <a
            href={CONTACT_TEL_LINK}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-brand-yellow text-near-black font-sans font-bold text-sm tracking-wider uppercase btn-cut hover:bg-white transition-all duration-200"
          >
            <span className="mr-2 flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-near-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-near-black"></span>
            </span>
            PROVA GRATIS
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center space-x-3 sm:space-x-0 lg:hidden">
          <a
            href={CONTACT_TEL_LINK}
            className="sm:hidden flex items-center justify-center p-2 bg-brand-yellow text-near-black btn-cut"
            aria-label="Chiama il Box"
          >
            <PhoneCall size={18} />
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-white/10 text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors bg-near-black/50"
            aria-label="Nav menu toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] md:top-[72px] bg-near-black z-40 border-t border-brand-yellow/10 flex flex-col justify-between film-grain">
          {/* Menu links container */}
          <div className="px-6 py-8 flex flex-col space-y-6">
            <div className="h-[2px] hazard-stripes w-full mb-4"></div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-4xl tracking-tight text-white hover:text-brand-yellow transition-colors block uppercase"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="h-[2px] hazard-stripes w-full mt-4"></div>
          </div>

          {/* Action Footer */}
          <div className="p-6 bg-[#0c0c0b] border-t border-white/5 flex flex-col space-y-4">
            <a
              href={CONTACT_TEL_LINK}
              className="w-full py-4 bg-brand-yellow text-near-black font-sans font-bold text-lg text-center tracking-wider uppercase btn-cut flex items-center justify-center"
            >
              <PhoneCall size={20} className="mr-3" />
              PROVA GRATIS SUBITO
            </a>
            <div className="text-center text-white/40 text-xs font-sans tracking-widest uppercase">
              CHIAMACI: {CONTACT_PHONE}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
