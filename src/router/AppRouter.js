import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen'
import CalendarScreen from '../components/calendar/CalendarScreen'

const AppRouter = () => {
  return (
      <Router>
          <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/' element={<CalendarScreen /> } />
          </Routes>
      </Router>
  )
}

export default AppRouter
