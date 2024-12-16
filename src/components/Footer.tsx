import React from 'react';
import { Ship, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Ship className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">Segucargo</span>
            </div>
            <p className="text-neutral/80">
              Soluciones logísticas integrales para el transporte marítimo internacional
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#contenedores" className="hover:text-accent transition-colors">Contenedores</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@segucargo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Ciudad, País</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-neutral/60">
          <p>&copy; {new Date().getFullYear()} Segucargo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}