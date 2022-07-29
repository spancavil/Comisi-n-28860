import { createContext, useState } from "react"

export const UserSettings = createContext();

const UserSettingsProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <UserSettings.Provider value={{darkMode, setDarkMode}}>
            {children}
        </UserSettings.Provider>
    )
}

export default UserSettingsProvider;