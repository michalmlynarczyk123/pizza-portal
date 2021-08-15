import { styles } from './Login.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Link>
    <h2>Login view</h2>
  </div>
);

export default Login;