export const PrimaryButton = ({ text }) => {
    return (
        <button className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            {text}
        </button>
    )
}
