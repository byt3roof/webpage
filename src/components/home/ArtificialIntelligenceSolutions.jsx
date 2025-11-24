import content from '../../../content.json';

export const ArtificialIntelligenceSolutions = () => {
    const data = content.ArtificalIntelligenceSolutions;

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-purple-900/70 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-blue-900/50 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-hover text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {data.label}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                        {data.title}
                    </h2>

                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        {data.subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}
