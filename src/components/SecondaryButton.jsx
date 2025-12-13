export const SecondaryButton = ({ text }) => {
    return (
        <button className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition duration-200 cursor-pointer">
            {text}
        </button>
    )
}