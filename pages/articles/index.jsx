import Link from "next/link";
import styles from "../../styles/Article.module.css";

export const getStaticProps = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );
    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
};

const articles = ({ articles }) => {
    return (
        <div>
            <h1>Welcome to Articles</h1>
            <br />
            {articles.map((article) => (
                <Link href={`/articles/${article.id}`}>
                    <a className={styles.title}>{article.title}</a>
                </Link>
            ))}
        </div>
    );
};

export default articles;
