import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velox-void pt-24 pb-12 px-6 md:px-12 border-t border-velox-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <svg viewBox="0 0 200 40" className="h-10 w-auto mb-6 md:mb-0">
            <text x="0" y="32" fontFamily="var(--font-heading)" fontSize="40" letterSpacing="8" fill="var(--color-velox-chrome)">VELOX</text>
          </svg>
          <span className="text-mono text-velox-silver uppercase tracking-widest text-xs">
            Handbuilt in Portugal
          </span>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-velox-gold/50 to-transparent mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
          <div>
            <h4 className="text-mono text-velox-gold mb-6 font-bold uppercase tracking-widest text-xs">Machines</h4>
            <ul className="space-y-4">
              <li><Link to="/models/apex" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Apex</Link></li>
              <li><Link to="/models/spectra" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Spectra</Link></li>
              <li><Link to="/models/nox" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Nox</Link></li>
              <li><Link to="/models/genesis" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Genesis</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-mono text-velox-gold mb-6 font-bold uppercase tracking-widest text-xs">Experience</h4>
            <ul className="space-y-4">
              <li><Link to="/configurator" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Configure</Link></li>
              <li><Link to="/test-drive" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Test Drive</Link></li>
              <li><Link to="/gallery" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Gallery</Link></li>
              <li><Link to="/events" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-mono text-velox-gold mb-6 font-bold uppercase tracking-widest text-xs">Brand</h4>
            <ul className="space-y-4">
              <li><Link to="/about/story" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/about/philosophy" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Philosophy</Link></li>
              <li><Link to="/dealerships" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Atelier</Link></li>
              <li><Link to="/careers" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-mono text-velox-gold mb-6 font-bold uppercase tracking-widest text-xs">Media</h4>
            <ul className="space-y-4">
              <li><Link to="/media/press-releases" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Press Releases</Link></li>
              <li><Link to="/media/press-kit" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Press Kit</Link></li>
              <li><Link to="/journal" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="text-velox-silver hover:text-velox-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-mono text-velox-gold mb-6 font-bold uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-velox-silver hover:text-velox-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-velox-silver hover:text-velox-gold transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-velox-silver hover:text-velox-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-velox-white/5 text-xs text-velox-silver/60">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} VELOX Automotive. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-8 mb-4 md:mb-0">
            <Link to="/legal/privacy" className="hover:text-velox-white transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-velox-white transition-colors">Terms of Use</Link>
            <button className="hover:text-velox-white transition-colors">Cookie Settings</button>
          </div>
          <p className="max-w-[300px] md:text-right">Prices shown are indicative. Contact your nearest VELOX Atelier for details.</p>
        </div>
      </div>
    </footer>
  );
}
