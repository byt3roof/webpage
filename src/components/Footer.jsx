import content from '../../content.json';

export const Footer = () => {
    const { footer } = content;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        <span className="font-bold text-2xl tracking-tight text-white mb-4 block">
                            Byt3roof
                        </span>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Soluciones tecnológicas a la medida para impulsar el crecimiento de tu empresa.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Inicio</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Servicios</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contacto</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href={`mailto:${footer.contact.email}`} className="hover:text-white transition-colors">
                                    {footer.contact.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href={`https://wa.me/${footer.contact.whatsapp.replace(/\D/g, '')}`} className="hover:text-white transition-colors">
                                    {footer.contact.whatsapp}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Byt3roof. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-4">
                        {/* TO-DO: Social placeholders will go here */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
