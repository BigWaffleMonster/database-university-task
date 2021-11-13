import { makeAutoObservable } from 'mobx'
import { Roles } from '../types/roles'

class RoleStore {
  role: Roles = Roles.CUSTOMER

  constructor() {
    makeAutoObservable(this)
  }

  changeRole(role: Roles) {
    this.role = role
  }
}

export default new RoleStore()
