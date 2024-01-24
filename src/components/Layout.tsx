import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <section className='flex flex-1 h-[100dvh]'>
        <Outlet />
      </section>
    </>
  )
}

export default Layout
