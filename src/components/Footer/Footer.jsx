import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>replay</title><path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" /></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-up</title><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg>
            </button>
        </footer>
    )
}

export default Footer;