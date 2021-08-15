import { styles } from './Waiter.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>New order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>Orders</Link>
    <h2>Waiter view</h2>
  </div>
);

export default Waiter;