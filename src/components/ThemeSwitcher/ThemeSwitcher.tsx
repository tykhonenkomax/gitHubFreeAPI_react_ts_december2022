import styles from './ThemeSwitcher.module.scss';
import {ReactComponent as MoonIcon} from 'assets/icon-moon.svg'
import {ReactComponent as SunIcon} from 'assets/icon-sun.svg'
import {useEffect, useState} from "react";

interface ThemeSwitcherProps {
}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {

    let [isDark, setDark] = useState(false);
    
    const themeText = isDark ? 'Light' : 'isDark'
    const ThemeIcon = isDark ? SunIcon : MoonIcon

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <div className={styles.ThemeSwitcher} onClick={() => setDark(!isDark)}>
            <span>{themeText}</span>
            <ThemeIcon className={styles.icon}/>
        </div>
    );
};
