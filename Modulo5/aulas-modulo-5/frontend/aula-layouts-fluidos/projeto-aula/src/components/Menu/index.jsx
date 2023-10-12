import React from 'react'
import closeIcon from "../../assets/close.svg"
import menuIcon from "../../assets/menu.svg"
import './style.css'

function Menu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = open ? 'hidden' : 'initial'
  }, [open])

  return (
    <nav className={`${open && 'fullscreen-menu'}`}>
      {open
        ?
        <img
          className='icon-close'
          style={{ display: `${open} ? 'block' : 'none'` }}
          src={closeIcon}
          onClick={() => setOpen(false)}
        />
        :
        <img
          className='icon-menu'

          src={menuIcon}
          onClick={() => setOpen(true)}
        />
      }
      <ul className='menu'>
        <li>Ação</li>
        <li>Comédia</li>
        <li>Drama</li>
        <li>Ficção</li>
        <li>Animação</li>
      </ul>
    </nav>
  )
}

export default Menu