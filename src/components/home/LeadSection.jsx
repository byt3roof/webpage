import content from '../../../content.json';
import { PrimaryButton } from '../PrimaryButton';

export const LeadSection = () => {
    const { leadSection } = content;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                        {leadSection.title}
                    </h2>

                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        {leadSection.subtitle}
                    </p>

                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-12 border border-gray-100">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            {leadSection.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-center">
                        <PrimaryButton text={leadSection.ctaPrimary} />
                    </div>
                </div>
            </div>
        </section>
    )
}
