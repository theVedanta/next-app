import styles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a className="link">Home</a>
            </Link>
            <Link href="/about">
                <a className="link">About</a>
            </Link>
            <Link href="/articles">
                <a className="link">Articles</a>
            </Link>

            <style jsx>
                {`
                    .link {
                        color: #fff;
                        font-weight: 600;
                        font-size: 1vw;
                        padding: 1.6vh 2vw;
                    }
                `}
            </style>
        </nav>
    );
};

export default Nav;
