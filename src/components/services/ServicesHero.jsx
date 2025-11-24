import content from '../../../content.json';
import { PrimaryButton } from '../PrimaryButton';

export const ServicesHero = () => {
    const { hero } = content.services[0];

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white py-20">
            {/* Rainbow Gradient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
                <div className="absolute top-0 left-10 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                        {hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        {hero.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm h-full">
                        <h3 className="font-semibold text-lg text-gray-900 mb-6">Problemas comunes:</h3>
                        <ul className="space-y-4">
                            {hero.problemHighlights.map((problem, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 text-red-500">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                    {problem}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="h-full">
                        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 h-full flex flex-col justify-center">
                            <h3 className="font-semibold text-lg text-primary mb-4">Nuestra solución:</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {hero.solutionStatement}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <PrimaryButton
                        text={hero.ctaPrimary}
                        onClick={() => window.open(content.contactInfo.whatsapp, '_blank')}
                    />
                </div>
            </div>
        </section>
    )
}
