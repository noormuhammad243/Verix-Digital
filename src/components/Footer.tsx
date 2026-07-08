import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { contactInfo, services } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-slate-300 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal to-accent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white">
                Verix <span className="text-accent">Digital</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Transforming Ideas into Digital Success. We are a premium digital marketing & creative design agency dedicated to growing your business.
            </p>
            <div className="flex gap-4">
              <a href={contactInfo.facebook} className="p-2 rounded-full bg-white/5 hover:bg-royal hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href={contactInfo.instagram} className="p-2 rounded-full bg-white/5 hover:bg-royal hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href={contactInfo.linkedin} className="p-2 rounded-full bg-white/5 hover:bg-royal hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={contactInfo.youtube} className="p-2 rounded-full bg-white/5 hover:bg-royal hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="hover:text-accent transition-colors text-sm flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-royal" /> Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors text-sm flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-royal" /> About</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors text-sm flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-royal" /> Our Services</Link></li>
              <li><Link to="/case-study" className="hover:text-accent transition-colors text-sm flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-royal" /> Case Study</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors text-sm flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-royal" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-accent transition-colors text-sm flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-royal" /> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-accent shrink-0 mt-0.5" size={18} />
                <a href={`https://wa.me/${contactInfo.whatsapp}`} className="hover:text-accent transition-colors">
                  WhatsApp: <br/>{contactInfo.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-accent shrink-0 mt-0.5" size={18} />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Verix Digital Expert. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-royal text-white transition-all hover:-translate-y-1 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
