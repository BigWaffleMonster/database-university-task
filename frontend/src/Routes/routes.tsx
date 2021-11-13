import { Route, Routes, Navigate } from 'react-router-dom'
import ChooseRole from '../Components/ChooseRole'
import { Roles } from '../types/roles'

export const useRoutes = (role?: Roles) => {
  if (role === Roles.CUSTOMER) {
    return (
      <Routes>
        <Route path='/customer' element={<h1>Customer</h1>} />
        <Route path='/choose_role' element={<ChooseRole />} />
        <Route path='/' element={<Navigate to='/customer' />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    )
  } else if (role === Roles.CASHIER) {
    return (
      <Routes>
        <Route path='/cashier' element={<h1>Cash</h1>} />
        <Route path='/choose_role' element={<ChooseRole />} />
        <Route path='/' element={<Navigate to='/cashier' />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    )
  } else if (role === Roles.ADMIN) {
    return (
      <Routes>
        <Route path='/admin' element={<h1>Admin</h1>} />
        <Route path='/choose_role' element={<ChooseRole />} />
        <Route path='/' element={<Navigate to='/admin' />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    )
  }
}
