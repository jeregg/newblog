import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <ol className={styles.posts}>
      {posts.map((post) => (
      <li key={post.id}>
        <Link href={`/${post.id}`}>
          <Text text={post.properties.Name.title} />
        </Link>
      </li>
        ))}
    </ol>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};