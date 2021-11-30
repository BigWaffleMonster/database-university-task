import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'

import styles from './navbar.module.scss'
import roleStore from '../../store/roleStore'
import {Roles} from '../../types/roles'

const NavBar: FC = () => {
  return (
    <div className={styles.container}>
      <div className='logo'>Logo</div>

      <div className={styles.menu}>
        <ul>
          {roleStore.role === Roles.ADMIN ?
            <li>
              <NavLink to='/plays' className={styles.navlink}>
                Plays
              </NavLink>
            </li>
            :
            <li>
              <NavLink to='#' className={styles.navlink}>
                Link1
              </NavLink>
            </li>
          }
          {roleStore.role === Roles.ADMIN ?
            <li>
              <NavLink to='/plays' className={styles.navlink}>
                Plays Schedule
              </NavLink>
            </li>
            :
            <li>
              <NavLink to='#' className={styles.navlink}>
                Link2
              </NavLink>
            </li>
          }
          {roleStore.role === Roles.ADMIN ?
            <li>
              <NavLink to='/plays' className={styles.navlink}>
                Cashiers
              </NavLink>
            </li>
            :
            <li>
              <NavLink to='#' className={styles.navlink}>
                Link3
              </NavLink>
            </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default NavBar
