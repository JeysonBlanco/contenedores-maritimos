import React from 'react';
import { Ship, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Ship className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold">Segucargo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="hover:text-accent transition-colors">Inicio</a>
            <a href="#contenedores" className="hover:text-accent transition-colors">Contenedores</a>
            <a href="#contacto" className="hover:text-accent transition-colors">Contacto</a>
            <button className="bg-accent text-primary-dark px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Cotizar
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#inicio" className="block hover:text-accent transition-colors">Inicio</a>
            <a href="#contenedores" className="block hover:text-accent transition-colors">Contenedores</a>
            <a href="#contacto" className="block hover:text-accent transition-colors">Contacto</a>
            <button className="w-full bg-accent text-primary-dark px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Cotizar
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}