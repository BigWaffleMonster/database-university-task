import { Route, Routes, Navigate } from 'react-router-dom'
import ChooseRole from '../Components/ChooseRole'
import { Roles } from '../types/roles'
import CustomerPage from '../Components/CustomerPage'
import CashierPage from '../Components/CashierPage'
import AdminPage from '../Components/AdminPage'
import PlaysPage from '../Components/PlaysPage'
import UpdatePlayPage from '../Components/UpdatePlayPage/UpdatePlayPage'
import CashierListPageFroAdmin from '../Components/CashierListPageForAdmin'
import SchedulePage from '../Components/SchedulePage'
import Schedule from '../Components/Schedule'

export const useRoutes = (role?: Roles) => {
  if (role === Roles.CUSTOMER) {
    return (
      <Routes>
        <Route path='/customer' element={<CustomerPage />} />
        <Route path='/choose_role' element={<ChooseRole />} />
        <Route path='/' element={<Navigate to='/customer' />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    )
  } else if (role === Roles.CASHIER) {
    return (
      <Routes>
        <Route path='/cashier' element={<CashierPage />} />
        <Route path='/choose_role' element={<ChooseRole />} />
        <Route path='/' element={<Navigate to='/cashier' />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    )
  } else if (role === Roles.ADMIN) {
    return (
      <Routes>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/choose_role' element={<ChooseRole />} />
        <Route path='/plays' element={<PlaysPage />} />
        <Route path='/plays/:id' element={<UpdatePlayPage />} />
        <Route path='/cashiers' element={<CashierListPageFroAdmin />} />
        <Route path='/schedule/:id' element={<Schedule />} />
        <Route path='/plays_schedule' element={<SchedulePage />} />
        <Route path='/' element={<Navigate to='/admin' />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    )
  }
}
