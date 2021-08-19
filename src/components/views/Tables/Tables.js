import styles from './Tables.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/tables/ordering/:id`} activeClassName='active'>Ordering</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/ordering/new`} activeClassName='active'>New ordering</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Events</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New events</Link>
    <h2>Tables view</h2>
  </div>
);

export default Tables;