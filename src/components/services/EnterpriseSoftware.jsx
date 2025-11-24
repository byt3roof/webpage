import content from '../../../content.json';
import { PrimaryButton } from '../PrimaryButton';

export const EnterpriseSoftware = () => {
    const { enterpriseSoftware } = content.services[0];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {enterpriseSoftware.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {enterpriseSoftware.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {enterpriseSoftware.cards.map((card, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <PrimaryButton
                        text={enterpriseSoftware.ctaPrimary}
                        onClick={() => window.open(content.contactInfo.whatsapp, '_blank')}
                    />
                </div>
            </div>
        </section>
    )
}
