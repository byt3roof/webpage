import content from "../../../content.json";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";

export const ERPHero = () => {
    const { hero } = content.erpPage;

    return (
        <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-100 blur-[100px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[100px] opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 tracking-wide uppercase">
                    Enterprise Resource Planning
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 max-w-5xl mx-auto leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-500">
                        {hero.title}
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
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
