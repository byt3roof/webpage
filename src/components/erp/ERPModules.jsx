import content from "../../../content.json";

export const ERPModules = () => {
    const { modules } = content.erpPage;

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900 blur-[120px] opacity-20 rounded-full pointer-events-none transform-gpu"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 blur-[120px] opacity-20 rounded-full pointer-events-none transform-gpu"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{modules.title}</h2>
                    <p className="text-xl text-slate-300">{modules.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {modules.list.map((mod, index) => (
                        <div key={index} className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition duration-300 hover:-translate-y-1 will-change-transform">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{mod.name}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{mod.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
