import Image from "next/image";

import Background from './assets/images/background.svg'
import LogoText from './assets/images/logo-text.svg'

import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.root}>
            <header className={styles.header}>
                <Image src={LogoText} sizes="100vw" alt="Logo DevFest Lyon 2025" className={styles.logoText}/>
                <h1 className={styles.title}>DevFest Lyon 2025 is coming...</h1>
            </header>
            <Image src={Background} className={styles.cityscape} alt="Paysage urbain de Lyon avec bâtiments"/>
            <footer className={styles.footer}>
                <p>&copy; 2025 DevFest Lyon. Tous droits réservés.</p>
            </footer>
        </main>
    );
}
