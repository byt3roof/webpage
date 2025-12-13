import content from "../../content.json";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

export const Hero = () => {
  const { hero } = content;

  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="mesh-gradient"></div>
        <div className="noise-texture"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
          {hero.title}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryButton
            text={hero.ctaPrimary}
            onClick={() => window.open(content.contactInfo.whatsapp, "_blank")}
          />

          <SecondaryButton text={hero.ctaSecondary} />
        </div>
      </div>
    </section>
  );
};
