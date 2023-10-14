import { useTheme } from "./useTheme.js";

export default function ButtonDarkMode() {
    const { toggleTheme } = useTheme();
    return (
        <>
            <button
                type="button"
                class="btn btn-black rounded-circle p-3 lh-1"
                onClick={toggleTheme}
            ><i class="fa-solid fa-moon"></i>/<i class="fa-solid fa-sun"></i>
            </button>
        </>
    )
}