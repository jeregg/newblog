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
      <ol className="">
          {sortedPosts.map((post) => {
            return (
              <div className="blog_post">
              <li key={post.id} className="post_title">
                <h3 className="post_title_name">
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>
                <p className="post_title_date">{post.properties.Date.date.start}</p>
              </li>
              <p className="post_summary">{post.properties.Summary.rich_text[0].plain_text} </p>
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