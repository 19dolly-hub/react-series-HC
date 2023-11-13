import useTheme from "../context/theme"

export default function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme();

    const handleChange = (e) => {
        const checked = e.currentTarget.checked;
        if(checked) darkTheme();
        else lightTheme();
    }

    return (
        <div className="m-5 p-4 border-2 border-black rounded dark:border-white">
            <input 
            id="theme"
            type="checkbox"
            value=""
            onChange={handleChange}
            checked={themeMode === "dark"}
             />
             <br />
             <label htmlFor="theme">Dark Theme</label>
        </div>
    )
}