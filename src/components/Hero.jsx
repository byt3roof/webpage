import content from '../../content.json';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

export const Hero = () => {
    const { hero } = content;

    return (
        <section className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-white to-white pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Decorative background elements */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/60 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/60 rounded-full blur-3xl mix-blend-multiply animate-blob [animation-delay:2000ms]"></div>
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