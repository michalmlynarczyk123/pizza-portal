import styles from './Login.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const Login = () => (
  <div className={styles.component}>
    <Toolbar />
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="User Name"
      variant="outlined"
    />
    <Toolbar></Toolbar>
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="outlined"
    />
    <Toolbar />
    <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Login</Button>
    <Toolbar />
  </div>
);

export default Login;