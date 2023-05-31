import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import Header from "../components/header";
import Footer from "../components/footer";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>plsfix</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div className="justify-center px-4">
      <Header />
        <ol className="">
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className="my-3 flex flex-col justify-between md:flex-row">
                <h3 className="text-lg font-bold underline-offset-8 hover:underline transition duration-500">
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>

                <p className="flex-shrink-0 align-middle text-sm">{date}</p>
              </li>
            );
          })}
        </ol>
        <Footer />
      </div>
    </div>
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