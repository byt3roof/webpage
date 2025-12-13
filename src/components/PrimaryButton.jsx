export const PrimaryButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5 transition duration-200 cursor-pointer will-change-transform">
            {text}
        </button>
    )
}
