import { useState } from "react"
import { PrimaryButton } from "./PrimaryButton";
import content from '../../content.json';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Servicios', href: '#' }
    ]

    return (
        <nav className="w-full border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <span className="font-bold text-xl tracking-tight text-gray-900">
                            Byt3roof
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <PrimaryButton
                                text="Contacto"
                                onClick={() => window.open(content.contactInfo.whatsapp, '_blank')}
                            />
                        </div>

                        {/* Mobile CTA */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-gray-600 hover:text-black focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}