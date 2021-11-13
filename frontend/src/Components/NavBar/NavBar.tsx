import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navbar.module.scss'

const NavBar: FC = () => {
  return (
    <div className={styles.container}>
      <div className='logo'>Logo</div>

      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink to='#' className={styles.navlink}>
              Link1
            </NavLink>
          </li>
          <li>
            <NavLink to='#' className={styles.navlink}>
              Link1
            </NavLink>
          </li>
          <li>
            <NavLink to='#' className={styles.navlink}>
              Link1
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
