import content from '../../content.json';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

export const Hero = () => {
    const { hero } = content;

    return (
        <section className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-white to-white pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/60 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/60 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                    {hero.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <PrimaryButton text={hero.ctaPrimary} />

                    <SecondaryButton text={hero.ctaSecondary} />
                </div>

            </div>

        </section>
    )
}