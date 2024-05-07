import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isLoggedIn={!!uid} />}>
          <Route path="/" element={<CalendarScreen />} />
        </Route>

        <Route element={<PublicRoute isLoggedIn={!!uid} />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
