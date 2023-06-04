import { Client } from '@notionhq/client';
import { useEffect } from 'react';

export default function Whatever({ results }) {
    useEffect(() => {
        console.log(results);
    });

    const getDatabaseDisplay = () => {
        let js = [];
        results.forEach((post) => {
            js.push(
                <div className="card" key={post.id}>
                    <p>{post.properties.Name.title[0].plain_text}</p>
                    <p>{post.properties.Push.select.name}</p>
                    <p>{post.properties.Summary.rich_text[0].plain_text}</p>
                    <p>{post.properties.Date.date.start}</p>
                </div>
            );
        });
        return js;
    };

    return <div>{getDatabaseDisplay()}</div>;
}

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
    })

    console.log(response);
    return {
        props: {
            results: response.results,
        }
    }
}

