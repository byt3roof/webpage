import { ERPHero } from "../components/erp/ERPHero";
import { ERPIntro } from "../components/erp/ERPIntro";
import { ERPBenefits } from "../components/erp/ERPBenefits";
import { ERPModules } from "../components/erp/ERPModules";
import { ERPLead } from "../components/erp/ERPLead";
import { useEffect } from "react";

export const ERP = () => {
    // Simple SEO Title update on mount
    useEffect(() => {
        document.title = "ERP Personalizado | Odoo Community Customization | ByteRoof";
    }, []);

    return (
        <div className="bg-white">
            <ERPHero />
            <ERPIntro />
            <ERPBenefits />
            <ERPModules />
            <ERPLead />
        </div>
    );
};
