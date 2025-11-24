import content from '../../../content.json';
import { PrimaryButton } from '../PrimaryButton';
import { Card } from '../Card';
import { getIconPath } from '../../utils/assets';

export const CustomSolutions = () => {
    const { customSolutions } = content.services[0];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {customSolutions.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {customSolutions.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {customSolutions.cards.map((card, index) => (
                        <div key={index} className="h-full">
                            <Card
                                title={card.title}
                                description={card.description}
                                icon={getIconPath(card.icon)}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <PrimaryButton
                        text={customSolutions.ctaPrimary}
                        onClick={() => window.open(content.contactInfo.whatsapp, '_blank')}
                    />
                </div>
            </div>
        </section>
    )
}
