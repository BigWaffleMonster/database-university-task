import React from 'react'
import NavBar from './Components/NavBar'
import { useRoutes } from './Routes/routes'
import roleStore from './store/roleStore'

const App = () => {
  const routes = useRoutes(roleStore.role)

  return (
    <>
      <NavBar />

      {routes}
    </>
  )
}

export default App
