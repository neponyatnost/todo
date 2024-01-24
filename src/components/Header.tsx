import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [theme, setTheme] = useState('dark')

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <header className='p-6'>
      <nav className=''>
        <ul className='flex items-center justify-center gap-6'>
          <li className='btn btn-outline'>
            <Link to='/create'>Create task</Link>
          </li>
          <li className='btn btn-outline'>
            <button onClick={handleChangeTheme}>Theme</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
