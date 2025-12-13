import content from "../../../content.json";
import { PrimaryButton } from "../PrimaryButton";

export const ERPLead = () => {
    const { cta } = content.erpPage;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border border-gray-100 shadow-xl">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    {cta.title}
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    {cta.subtitle}
                </p>
                <div className="flex justify-center">
                    <PrimaryButton
                        text={cta.buttonText}
                        onClick={() => window.open(content.contactInfo.whatsapp, "_blank")}
                    />
                </div>
            </div>
        </section>
    );
};
