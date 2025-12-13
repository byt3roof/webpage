import content from "../../../content.json";

export const ERPIntro = () => {
    const { intro } = content.erpPage;

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                    {intro.title}
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-gray-700 leading-8">
                    {intro.description}
                </p>
            </div>
        </section>
    );
};
