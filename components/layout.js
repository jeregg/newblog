import Header from '../components/header'
import Footer from '../components/footer'

export const metadata = {
  title: 'PLSFIX',
  description: 'PLSFIX',
}

const Layout = ({ children }) => {
  return (
    <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8">
          <aside className="md:w-[120px] md:flex-shrink-0 md:mx-0 md:px-0"><Header /></aside>
          <main className="flex-auto min-w-0 md:mt-0 flex flex-col">{ children }</main>
    </div>
  )
}

export default Layout;