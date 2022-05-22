import Link from "next/link";
import styles from "../../styles/Layout.module.css";

const article = ({ article }) => {
    return (
        <>
            <div className={styles.title}>{article.title}</div>
            <br />
            <Link href="/articles">
                <a className={styles.btn}>Go Back</a>
            </Link>
        </>
    );
};

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );
    const article = await res.json();

    return {
        props: { article },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();

    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return { paths, fallback: false };
};

export default article;
