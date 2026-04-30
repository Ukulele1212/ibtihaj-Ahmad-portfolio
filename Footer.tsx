import Link from "next/link";
import { Linkedin, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter mb-4 inline-block">
              TAJI<span className="text-gray-400">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mt-4">
              Professional Web Developer and SEO Specialist. I build custom, high-converting websites and drive organic traffic through long-term SEO strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/web-development" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/seo-services" className="text-gray-400 hover:text-white transition-colors">SEO Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <a href="mailto:workspacetaji@gmail.com" className="hover:text-white transition-colors">workspacetaji@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <a href="https://wa.me/923426020368" className="hover:text-white transition-colors">+92 342 602 0368</a>
              </li>
              <li className="flex gap-4 mt-6">
                <a href="https://www.linkedin.com/in/ibtihaj-ahmad-3a83b724a" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61583354048757" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  <Facebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ibtihaj Ahmad (Taji). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
