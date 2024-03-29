import Sidebar from '../components/sidebar';


export const metadata = {
  title: 'PLSFIX',
  description: 'PLSFIX',
}


export default function RootLayout(props) {
  const { children } = props;
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-[#111010]"
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-3 mt-4 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-4 flex flex-col">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}