import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import Layout from '../components/layout';


export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.properties.Date.date.start);
    const dateB = new Date(b.properties.Date.date.start);
    return dateB - dateA;
  });
  return (
    <Layout>
      <ol>
          {sortedPosts.map((post) => {
            return (
              <div className="flex flex-col space-y-1 mb-4">
              <li key={post.id}>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 my-1">{post.properties.Date.date.start}</p>
              <p className="text-neutral-600 dark:text-neutral-400 my-1">{post.properties.Summary.rich_text[0].plain_text} </p>
              </li>
              </div>
            );
          })}
        </ol>    
    </Layout>
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