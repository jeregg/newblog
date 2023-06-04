import { Client } from '@notionhq/client';
import { useEffect } from 'react';

export default function About({ data }) {

  return <div></div>;
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const blockId = '644103c0b6924029a41b9de5b94e9497';
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