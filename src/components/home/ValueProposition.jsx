import content from '../../../content.json';
import { Card } from '../Card';

export const ValueProposition = () => {
    const { valueProposition } = content;

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                        {valueProposition.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {valueProposition.cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
