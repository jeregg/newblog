import { Client } from '@notionhq/client';
import { useEffect } from 'react';

export default function About({ data }) {
  useEffect(() => {
    console.log(data.results);
  });

  const getPageDisplay = () => {
    let js = [];
    data.results.forEach((block) => {
        if (block.type === 'paragraph') {
            js.push(<p>{block.paragraph.rich_text[0]?.plain_text}</p>);
        }
        if (block.type === 'bulleted_list_item') {
            js.push(
            <ul>
                <li>{block.bulleted_list_item.rich_text[0]?.plain_text}</li>
            </ul>
            );
        }
    });
    return js;
  };

  return <div>{getPageDisplay()}</div>;
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const blockId = '18479ea4d09c4019b36790a8899494f5';
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  console.log(response);

  return {
    props: {
      data: response,
    },
  };
}