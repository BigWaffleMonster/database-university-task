import { observer } from 'mobx-react-lite'
import React, { createContext } from 'react'
import roleStore from '../../store/roleStore'
import { Roles } from '../../types/roles'
import styles from './chooseRole.module.scss'

const ChooseRole = observer(() => {
  return (
    <>
      <div className={styles.container}>
        <h1>Choose Role</h1>
      </div>
      <div className={styles.menu}>
        <button
          className={styles.btn}
          onClick={() => roleStore.changeRole(Roles.CUSTOMER)}
        >
          Customer
        </button>
        <button
          className={styles.btn}
          onClick={() => roleStore.changeRole(Roles.CASHIER)}
        >
          Cashier
        </button>
        <button
          className={styles.btn}
          onClick={() => roleStore.changeRole(Roles.ADMIN)}
        >
          Admin
        </button>
      </div>
    </>
  )
})

export default ChooseRole
