
// Load all icons from the assets folder eagerly
const icons = import.meta.glob('../assets/icons/*.svg', { eager: true, import: 'default' });

/**
 * Resolves the path to an icon from the assets folder.
 * @param {string} path - The path or filename of the icon (e.g., "src/assets/icons/icon.svg" or "icon.svg")
 * @returns {string|null} - The resolved URL of the icon or null if not found
 */
export const getIconPath = (path) => {
    if (!path) return null;

    // Extract just the filename to match against the glob results
    const filename = path.split('/').pop();
    const iconKey = Object.keys(icons).find(key => key.includes(filename));

    return iconKey ? icons[iconKey] : null;
};
